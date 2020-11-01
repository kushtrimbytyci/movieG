import React, { useState,useContext } from "react";
import { Input, Button, Alert, SelectPicker } from "rsuite";
import axios from "axios";
import profileContext from '../Context/Profiles/profileContext'

const AdminDashboard = () => {
 
  const [forma, setForma] = useState({
    title: "",
    imgsrc: "",
    link: "",
    genre: "",
    year: "",
    desc: "",
    quality:'',
    topimdb: "",
  });
  const profileCon = useContext(profileContext)
  const [search,setSearch]=useState('')
  const themoviedb = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TM}&query=${search}`)
    let genre1 ;
    switch(res.data.results[0].genre_ids[0])
    {
        case 28:
        genre1= "action"
        break;
      
        case 16:
          genre1= "animation"
          break;
          
        case 35:
         genre1= "comedy"
         break;
            
        case 80:
         genre1= "crime"
         break;
              
         case 99:
         genre1= "documentaries"
         break;
                              
        case 18:
        genre1= "drama"
        break;
                  
        case 14:
        genre1= "fantasy"
        break;
                    
        case 27:
        genre1= "horror"
        break;
        
        case 9648:
        genre1= "mystery"
        break;
          
        case 10749:
        genre1= "romance"
        break;

        case 53:
        genre1= "thriller"
        break;
        default:
          genre1='cima'
      
    }

    let year = res.data.results[0]?.release_date.split('-')
    setForma({...forma,genre:genre1,title:res.data.results[0].title,imgsrc:`https://image.tmdb.org/t/p/w300${res.data.results[0].poster_path}`,desc:res.data.results[0].overview,topimdb:res.data.results[0].vote_average,year:year[0],quality:'HD'})
  }

  const findMovie = async()=>{
    try {
      
      const data = await axios.post('/api/movies/search',{search})
      setForma(data.data.data[0])
    } catch (error) {
      Alert.warning("Not found",3000)
    }
  }

  const updateMovie = async()=>{
    await axios.put(`/api/movies/${forma._id}`,forma)
    setForma({
      title: "",
      imgsrc: "",
      link: "",
      genre: "",
      quality:'',
      year: "",
      desc: "",
      topimdb: ""
    });
  }

  const deleteMovie = async()=>{
    try {
      await axios.delete(`/api/movies/${forma._id}`)
       setForma({
      title: "",
      imgsrc: "",
      link: "",
      genre: "",
      quality:'',
      year: "",
      desc: "",
      topimdb: ""
    });
    } catch (error) {
      Alert.warning("No movie found",4000)
      
    }
  }

  const handleForm = (value, e) => {
    if (e.target.name) {
      setForma({ ...forma, [e.target.name]: e.target.value });
    } else {
      setForma({ ...forma, genre: value});
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        await axios.post("/api/movies", forma);
        Alert.success("Success", 3000);
        setForma({
          _id:"",
          title: "",
          imgsrc: "",
          link: "",
          genre: "",
          quality:'',
          year: "",
          desc: "",
          topimdb: ""
        });
      } catch (error) {
        Alert.warning(
          `${error.response.data.error.error || error.response.data.error}`,5000  );
        
        } 
  };

  return (
    <div className='admin-container' style={{ paddingTop: "50px",backgroundColor:`${profileCon.backgroundColor}` }}>
    <div className='admin-update'>
    <div>
      <form >
        <strong htmlFor='title'>Title</strong>
        <Input
          required
          style={{ width: 300 }}
          name='title'
          value={forma?.title}
          placeholder='Title...'
          size='md'
          onChange={handleForm}
        />
        <strong htmlFor=''>Image URL</strong>
        <Input
          required
          style={{ width: 300 }}
          name='imgsrc'
          value={forma.imgsrc}
          placeholder='Image source/Please take it from tmdb.org..'
          size='md'
          onChange={handleForm}
        />
        <strong htmlFor=''>Link</strong>
        <Input
          required
          style={{ width: 300 }}
          name='link'
          value={forma.link}
          placeholder='Link of the movie..'
          size='md'
          onChange={handleForm}
        />
         <strong htmlFor=''>Quality/Please in capital HD CAM BLUERAY</strong>
        <Input
          required
          style={{ width: 300 }}
          name='quality'
          value={forma.quality}
          placeholder='Quality'
          size='md'
          onChange={handleForm}
        />
        <strong htmlFor=''>Genre</strong>

        <SelectPicker
          value={forma.genre}
          name='genre'
          data={[
            {
              label: "action",
              value: "action",
              role: "Master",
            },
            {
              label: "romance",
              value: "romance",
              role: "Master",
            },
            {
              label: "comedy",
              value: "comedy",
              role: "Master",
            },
            {
              label: "animation",
              value: "animation",
              role: "Master",
            },
            {
              label: "drama",
              value: "drama",
              role: "Master",
            },
            {
              label: "hindi",
              value: "hindi",
              role: "Master",
            },
            {
              label: "history",
              value: "history",
              role: "Master",
            },
            {
              label: "crime",
              value: "crime",
              role: "Developer",
            },
            {
              label: "horror",
              value: "horror",
              role: "Developer",
            },
            {
              label: "fantasy",
              value: "fantasy",
              role: "Developer",
            },
            {
              label: "thriller",
              value: "thriller",
              role: "Developer",
            } ,{
              label: "documentaries",
              value: "documentaries",
              role: "Developer",
            },
            {
              label: "mystery",
              value: "mystery",
              role: "Developer",
            },
            
          ]}
          style={{ width: 224, display: "block" }}
          onChange={handleForm}
        />
        <strong htmlFor=''>Year</strong>
        <Input
          required
          style={{ width: 300 }}
          name='year'
          value={forma.year}
          placeholder='Year of the movie..'
          size='md'
          onChange={handleForm}
        />
        <strong htmlFor=''>Description</strong>
        <Input
          required
          style={{ width: 300 }}
          name='desc'
          value={forma.desc}
          placeholder='Description of the movie..'
          size='md'
          onChange={handleForm}
        />
        <strong htmlFor=''>IMDB rating </strong>
        <Input
          required
          style={{ width: 300 }}
          name='topimdb'
          value={forma.topimdb}
          placeholder='IMBD rating'
          size='md'
          onChange={handleForm}
        />
      </form>
        <Button
          appearance='primary'
          style={{ marginTop: "10px", width: 150, marginBottom: "10px" }}
          onClick={handleSubmit}
          // onMouseOver={()=>setForma({...forma,_id:uuidv4()})}
        >
          Add this movie
        </Button>
        <Button
        color='cyan'
          appearance='primary'
          style={{ marginTop: "10px", width: 150, marginBottom: "10px" }}
          onClick={updateMovie}
        >
          Update
        </Button>
        <Button
        color='red'
          appearance='primary'
          style={{ marginTop: "10px", width: 150, marginBottom: "10px" }}
          onClick={deleteMovie}
        >
          DeleteMovie
        </Button>
        </div>
      <div>
         <strong htmlFor='title'>Title of the movie you want to edit</strong>
      <Input
          required
          style={{ width: 300 }}
          name='topimdb'
          value={search}
          placeholder='Title of the movie, please write the exact title'
          size='md'
          onChange={(value)=>setSearch(value)}
        />
        <Button
          onClick={findMovie}
          appearance='default'
          color='orange'
          style={{marginTop:'7px'}}
          
        >
          Find to edit
        </Button>
        <Button
          onClick={themoviedb}
          appearance='default'
          color='blue'
          style={{marginLeft:'20px',marginTop:'7px'}}

          
        >
          Search Movie on the internet
        </Button>
        </div>
        </div>
    </div>
  );
};

export default React.memo(AdminDashboard);
