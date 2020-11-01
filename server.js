const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

//Security packages
const expressMongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const cors = require("cors");
const http = require('http')

const app = express();
const server = http.createServer(app)

const io = require("socket.io")(server, {
  handlePreflightRequest: (req, res) => {
      const headers = {
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Origin": "http://localhost:5000", //or the specific origin you want to give access to,
          "Access-Control-Allow-Credentials": true
      };
      res.writeHead(200, headers);
      res.end();
  }
});

//Dotenv Configuration
dotenv.config({ path: path.join(__dirname, "/config/config.env") });
connectDB();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middlewares
// app.use(cors({origin:'localhost:5000'}));
app.use(cors())
app.use(expressMongoSanitize())
app.use(helmet())
app.use(xssClean())
app.use(hpp())

io.on('connection',socket=>{
  socket.on('message',({name,message})=>{
      io.emit('message',{name,message})
  })
})

//Route import
const movies = require("./Routes/movies");
const register = require("./Routes/user");
const feature = require('./Routes/feature')
const userm = require('./Routes/userm')

//Routes
app.use('api/f',feature)
app.use("/api/movies", movies);
app.use("/api", register);
app.use('/apii',userm)




app.use((error, req, res, next) => {
  if (error.name === "CastError") {
    return res.status(404).json({ error: `Resource not found ` });
  }
  if (error.code === 11000) {
    return res.status(404).json({ error: "Duplicate found" });
  }
  if (error.name === "ValidationError") {
    const hej = Object.values(error.errors).map((e) => e.message);
    return res.status(404).json({ error: `${hej.join(". ")}` });
  }

  res.status(error.statusCode || 500); 
  res.json({
    error: {
      error: error.message || "Not Found",
    },
  });
});

if(process.env.NODE_ENV==='production')
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })


const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  )
);


process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(() => process.exit(1));
});
