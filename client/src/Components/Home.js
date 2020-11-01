import React, {useState, useEffect, useContext, Fragment } from "react";
import MovieItem from "./MovieItem";
import {
  Pagination,
  Loader,
  Alert,
  Toggle,
  Icon,
} from "rsuite";
import TextLoop from 'react-text-loop'
import axios from "axios";
import profileContext from "../Context/Profiles/profileContext";
import signs from './images/signs.svg'
import multimedia from './images/multimedia.svg'
import ReactGA from 'react-ga'
import Sl from './Slide'



const Home = () => {
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(1);
  const [slide,setSlide]= useState([])
  const [sort,setSort] = useState('-year')
  const [show,setShow] = useState(false)
  const profileCon = useContext(profileContext);
  let arr = []
  useEffect(() => {
    const source = axios.CancelToken.source()
    const getMovies = async () => {
      try {
        const data = await axios.get(`/api/movies?limit=48&docex=true&sort=-year`,{cancelToken:source.token});
        profileCon.setProfile(data.data.data.data);
        for(let i = 0;i<=20;i++)
        {
          arr.push({link:data.data.data.data[i].link,id:data.data.data.data[i]._id,title:data.data.data.data[i].title,genre:data.data.data.data[i].genre,src:data.data.data.data[i].imgsrc})
        }
        setSlide(arr)
        setShow(true)
        setPage(Math.ceil(data.data.data.count / 48));
      } catch (error) {
        Alert.warning("No movies found", 3000);
        if(axios.isCancel(error)){
          //ignore
        }
      }
    };
    getMovies();
    ReactGA.pageview(window.location.pathname)
    return(()=>{
      source.cancel()
    })
    // eslint-disable-next-line
  }, []);

  const topIm = async () => {
    profileCon.clearProfile();
    try {
      const data = await axios.get("/api/movies/topimdb?docex=true");
      profileCon.setProfile(data.data.data);
    } catch (error) {
      Alert.warning("No movies found", 3000);
    }
  };
  const changePage = async (value, e) => {
    profileCon.clearProfile();
    const data = await axios.get(`/api/movies?limit=48&page=${value}&docex=true&sort=${sort}`);
    profileCon.setProfile(data.data.data.data);
    setPage(Math.ceil(data.data.data.count / 48));
    setNext(value)
  };
  const toggleChecker = (checked, e) => {
    if (checked) {
      profileCon.changeBackground("#222831");
    } else {
      profileCon.changeBackground("rgb(232,235,245)");
    }
    profileCon.changeToggle(checked);
  };

  return (
    <Fragment>
    <div
      className='home'
      style={{ backgroundColor: `${profileCon.backgroundColor} `}}
    >
    <div style={{position:'absolute',top:'10px',fontWeight:'bold',fontSize:'0.9rem',color:'#d7385e'}}>
    <TextLoop interval={2000} style={{backfaceVisibility:'hidden'}} >
    <span><img src={signs} alt="signs" width='15px' 
    /> Don't forget to bookmark Gomovie.site</span>
    <span><img src={multimedia} alt='multimedia' width='15px'/> Best movie collection on the internet!!</span>
    </TextLoop>
    </div>
      <div style={{maxWidth:'100vw',marginTop:'10px'}} className='react-slider'>
         {show && <Sl pr = {slide}/>}
      </div>

      <div className='daynight daynight-radial-out' onClick={()=>toggleChecker(!profileCon.toggle)}>
        <Icon icon='moon-o' style={{ color: "white" }} />
        <h6>NIGHT MODE</h6>
        <Toggle
          size='sm'
          // onChange={toggleChecker}
          className='toggle-daynight'
          checked={profileCon.toggle}
        />
      </div> 
      <div  className='cim' style={{display:'flex',top:'30px',marginBottom:'40px'}}>

          <button onClick={()=>{
            profileCon.clearProfile();
              setSort('-createdAt')
              const getMovies = async () => {
      try {
        const data = await axios.get(`/api/movies?limit=48&docex=true&sort=-createdAt`);
        profileCon.setProfile(data.data.data.data);
        setPage(Math.ceil(data.data.data.count / 48));
      } catch (error) {
        Alert.warning("No movies found", 3000);
       
      }
    };
    getMovies();
            }} className='btn' style={{color: 'black',border:'2px solid white',
    background: 'white',marginRight:'5px'}}>Latest added</button>


            <button onClick={()=>{
              profileCon.clearProfile();
              setSort('-year')
              const getMovies = async () => {
      try {
        const data = await axios.get(`/api/movies?limit=48&docex=true&sort=-year`);
        profileCon.setProfile(data.data.data.data);
        setPage(Math.ceil(data.data.data.count / 48));
      } catch (error) {
        Alert.warning("No movies found", 3000);

      }
    };
    getMovies();
            }} className='btn' style={{color: 'black',border:'2px solid white',
    background: 'white',marginRight:'5px'}}>Newest</button>


            <button onClick={()=>{
              topIm()
            }} className='btn' style={{color: 'black',border:'2px solid white',
    background: 'white',marginRight:'5px'}}>Top Imdb</button>

      </div>

      <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 2 }}
        // exit={{ opacity: 0 }}
        // variants={container}
        // initial='hidden'
        // animate='visible'
        className='movies'
      >
        {profileCon.profiles === null ? (
          <Loader center vertical size='lg' content='Loading..' />
        ) : (
          profileCon.profiles.map((e) => {
            return (
              <MovieItem
                link={e.link}
                src={e.imgsrc}
                title={e.title}
                key={e._id}
                desc={e.desc}
                genre={e.genre}
                quality={e.quality}
                topimdb={e.topimdb}
              />
            );
          })
        )}

      </div>
    </div>
        <div className='pagination'>
          {profileCon.profiles === null ? null : (
            <Pagination
              pages={page}
              ellipsis={true}
              boundaryLinks={true}
              activePage={next}
              onSelect={changePage}
              
            />
          )}
        </div>
    </Fragment>
  );
};

export default React.memo(Home);
