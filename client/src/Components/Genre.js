import React, { useEffect, useState,useContext } from "react";
import { Loader, Alert } from "rsuite";
import axios from "axios";
import MovieItem from "./MovieItem";
import profileContext from '../Context/Profiles/profileContext'
import ReactGA from 'react-ga'




const Action = (props) => {
  const profileCon = useContext(profileContext)
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`/api/movies/${props.match.params.type}?limit=500`);
        setMovies(data.data.data);
      } catch (error) {
        Alert.warning("No movies found", 3000);
      }
    };
    getData();
    ReactGA.pageview(window.location.pathname)
  }, [props.match.params.type]);

  
  return (
    <div style={{backgroundColor:`${profileCon.backgroundColor}`}} className='movies'>
    {movies === null ? (
        <Loader size='lg' content='Loading..' />
      ) : (
        movies.map((e) => {
          return (
            <MovieItem
              link={e.link}
              src={e.imgsrc}
              title={e.title}
              key={e._id}
              desc={e.desc}
              quality={e.quality}
              topimdb={e.topimdb}
            />
          );
        })
      )}
    </div>
  );
};

export default Action;
