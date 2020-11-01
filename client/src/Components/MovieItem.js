import React,{useEffect} from "react";
// import { Link } from "react-router-dom";
// import sal from 'sal.js'
// import '../../node_modules/sal.js/dist/sal.css';
// import sal from '../../node_modules'
// import LazyLoad from 'react-lazy-load';



const MovieItem = (props) => {
 
  // useEffect(()=>{
  //   sal()
  // },[])
  return (
    <div className='parent'>
    {/*  <div className='parent' data-sal="fade"> */}
      {/* <Link to={{pathname: "/video",state: { ...props }}}> */}
      <a href={props.link}>
 <div className='movie-item' style={{background:`url(${props.src}) no-repeat`,backgroundSize:'100% 100%'}}> */}
    <div className="movie-poster">
    </div>
    </div> 
    {/* <LazyLoad> */}
    <img src={props.src} className='movie-item'  alt=""/>
        {/* </LazyLoad> */}
 </a>
    <span className='movie-item-hd'>{props.quality}</span>
    <span className='movie-item-topimdb'>{props.topimdb}</span>
    <span className='movie-item-span'>
      <h2>{props.title}</h2>
    </span>
    
        {/* </Link> */}
        </div>


  );
};

export default React.memo(MovieItem);
