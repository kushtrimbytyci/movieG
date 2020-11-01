import React from "react";
import { NavLink } from "react-router-dom";
import electronics from './images/electronics.svg'

const Footer = () => {
  return (
    <footer className='footer'>
    <div style={{width:'70%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
    <div className="logo hide1">
    <h1 style={{color:'white'}}>GoMovie</h1>
    <hr style={{width:'80%'}}/>
    </div>
    <div className="categories" style={{display:'flex'}} className='hide1'>
    <div style={{display:'flex',flexDirection:'column',marginRight:'100px',flexWrap:'wrap'}}>
    <ul>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/action'>Action</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/animation'>Animation</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}}  to='/movies/horror'>Horror</NavLink></li>
    </ul>
    </div>
    <div style={{display:'flex',flexDirection:'column',marginRight:'100px'}}>
    <ul>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/romance'>Romance</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/drama'>Drama</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/comedy'>Comedy</NavLink></li>
    </ul>
    </div>
    <div style={{display:'flex',flexDirection:'column',marginRight:'100px'}}>
    <ul>
    <li ><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/crime'>Crime</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/fantasy'>Fantasy</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/thriller'>Thriller</NavLink></li>
    </ul>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <ul style={{listStyle:'none',textDecoration:'none'}}>
    {/* <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='movies/adventure'>Adventure</NavLink></li> */}
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/movies/mystery'>Mystery</NavLink></li>
    </ul>
    </div>
    </div>
    <hr style={{width:'80%'}} className='hide1'/>
<div className="copyright" style={{fontSize: 13,
    lineHeight: 23}}>
  <h6>Copyright© 2020, GoMovie. All rights reserved</h6>
</div>
</div>
<div style={{width:'30%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}} className='hide1'>
<img src={electronics} alt="electronics" width='80px'/>
<div style={{fontSize:'1rem'}}>
  <ul style={{display:'flex',justifyContent:'space-between'}}>
    <li style={{marginRight:'30px'}}><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/privacy'>Privacy</NavLink></li>
    <li><NavLink activeClassName='activelink' className='active-categories-footer' style={{color:'white'}} to='/dmca'>DMCA</NavLink></li>
  </ul>
  </div>
</div>
    </footer>
  );
};

export default Footer;