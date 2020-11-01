const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
        select: false, 
        minlength: 6
      },
      role:{
          type:String
      }
})




UserSchema.pre('save',async function(req,res,next){
    const salt = await bcryptjs.genSalt(10);

  this.password = await bcryptjs.hash(this.password, salt);
  next();

})


UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {   
    expiresIn: process.env.JWT_EXPIRE                           
  });
};

module.exports = mongoose.model('user',UserSchema)