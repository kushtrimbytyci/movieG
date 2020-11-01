import React,{useContext,useState, Fragment} from "react";
import { Icon,Dropdown,Navbar,Nav,InputGroup,Input,Alert } from "rsuite";

import {withRouter} from 'react-router-dom'
import AuthContext from '../Context/Auth/authContext'
import ProfileCon from '../Context/Profiles/profileContext'
import axios from 'axios'
import {useMediaQuery} from 'react-responsive'
// import nProgress from "nprogress";
import new2 from './images/new2.svg'
import videoc from './images/video-camera.svg'


// nProgress.configure({easing:'ease',speed:'500'})
const Navbari = (props) => {
  const isDesktop = useMediaQuery({query:'(min-width:1021px)'})
  const profileCon = useContext(ProfileCon)
  const authCon = useContext(AuthContext)
  const [search,setSearch] = useState('')
  const handleSearch = async(value,e)=>{
    setSearch(value)
  }
  
const handleEnter = async()=>{
    if(search!=='')
    {
      try {
        profileCon.clearProfile()
        const data = await axios.post('/api/movies/search',{search})
        profileCon.setProfile(data.data.data)
        if(props.location.pathname!=='/search')
        {
        props.history.push('/search')
        }
      } catch (error) {
        Alert.warning('No movie found',3000)
      }
    }
    else
    {
      Alert.warning('Please do your search',3000)
    }
  }

  const guestLinks = (
    <Nav>
    <Nav.Item  className='nav-underline-from-center' onClick={()=>window.location.assign('/')} icon={<Icon icon="home" />} >Home</Nav.Item>
    {/* <a href="/home">Home</a> */}
    {/* <Nav.Item className='nav-underline-from-center' onClick={()=>props.history.push('/series')}>Series</Nav.Item> */}
  <Nav.Item className='nav-underline-from-center' onClick={()=>props.history.push('/movies/documentaries')} >Documentaries</Nav.Item>
  <Nav.Item style={{position:'relative'}} onClick={()=>props.history.push('/movies/hindi')} ><img src={new2} width='20px' alt='hindi' style={{position:'absolute',display:'flex',justifyContent:'center',top:'0',left:'40%'}}/>Hindi</Nav.Item>
  <Nav.Item className='nav-underline-from-center' onClick={()=>props.history.push('/join')} >Discussion</Nav.Item>

  <Dropdown title="Genre">
    <Dropdown.Item onSelect={()=>props.history.push('/movies/action')}>Action</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/animation')}>Animation</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/crime')}>Crime</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/comedy')}>Comedy</Dropdown.Item>
    {/* <Dropdown.Item onSelect={()=>props.history.push('/movies/documentaries')}>Documentaries</Dropdown.Item> */}
    <Dropdown.Item onSelect={()=>props.history.push('/movies/drama')}>Drama</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/horror')}>Horror</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/romance')}>Romance</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/fantasy')}>Fantasy</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/thriller')}>Thriller</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/mystery')}>Mystery</Dropdown.Item>
  </Dropdown>
  </Nav>
  )

  const user = (
    <Nav><Nav.Item onClick={()=>window.location.assign('/')} icon={<Icon icon="home" />}>Home</Nav.Item>
    {/* <Nav.Item onClick={()=>props.history.push('/series')}>Series</Nav.Item> */}
    <Nav.Item onClick={()=>props.history.push('/movies/documentaries')} >Documentaries</Nav.Item>
    <Nav.Item style={{position:'relative'}} onClick={()=>props.history.push('/movies/hindi')} ><img src={new2} width='20px' alt='new2' style={{position:'absolute',display:'flex',justifyContent:'center',top:'0',left:'40%'}}/>Hindi</Nav.Item>
    <Nav.Item icon={<Icon icon='sign-in'/>} onClick={()=>{authCon.logout()
    props.history.push('/')
    }}>Logout</Nav.Item>
    <Nav.Item  onClick={()=>props.history.push('/admindashboard')}>Admin dashboard</Nav.Item>
    <Dropdown title="Genre">
      <Dropdown.Item onSelect={()=>props.history.push('/movies/action')}>Action</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/animation')}>Animation</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/crime')}>Crime</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/comedy')}>Comedy</Dropdown.Item>
    {/* <Dropdown.Item onSelect={()=>props.history.push('/documentaries')}>Documentaries</Dropdown.Item> */}
      <Dropdown.Item onSelect={()=>props.history.push('/movies/drama')}>Drama</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/horror')}>Horror</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/romance')}>Romance</Dropdown.Item>
      <Dropdown.Item onSelect={()=>props.history.push('/movies/fantasy')}>Fantasy</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/thriller')}>Thriller</Dropdown.Item>
    <Dropdown.Item onSelect={()=>props.history.push('/movies/mystery')}>Mystery</Dropdown.Item>
    </Dropdown>
    </Nav>
  )


  return (
    <Fragment>

{isDesktop&&
    <nav  className='main-nav'>
    <div className='nav-image-h3 ' >
      <div className='nav-img ' onClick={()=>window.location.assign('/')} style={{cursor:'pointer'}} >
        <img  style={{cursor:'pointer',padding:'3px'}} src={videoc} alt='webLogo' width='30%' height='93%'  />
        <div style={{alignSelf:'flex-end'}}>
        {/* <h3  style={{fontSize:'2rem',color:'black',position:'relative',top:'5px'}} >GoMovie.site</h3> */}
        {/* <img src={logo} alt="logo"/> */}
        <svg id='logo' width="176" height="23" viewBox="0 0 176 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.94 8.14002C16.3987 7.00135 15.6147 6.12402 14.588 5.50802C13.5613 4.87335 12.3667 4.55602 11.004 4.55602C9.64134 4.55602 8.40934 4.87335 7.30801 5.50802C6.22534 6.12402 5.36668 7.02002 4.73201 8.19602C4.11601 9.35335 3.80801 10.6974 3.80801 12.228C3.80801 13.7587 4.11601 15.1027 4.73201 16.26C5.36668 17.4174 6.22534 18.3134 7.30801 18.948C8.40934 19.564 9.64134 19.872 11.004 19.872C12.908 19.872 14.476 19.3027 15.708 18.164C16.94 17.0253 17.6587 15.4853 17.864 13.544H10.08V11.472H20.58V13.432C20.4307 15.0373 19.9267 16.512 19.068 17.856C18.2093 19.1813 17.08 20.236 15.68 21.02C14.28 21.7854 12.7213 22.168 11.004 22.168C9.19334 22.168 7.54134 21.748 6.04801 20.908C4.55468 20.0493 3.36934 18.864 2.49201 17.352C1.63334 15.84 1.20401 14.132 1.20401 12.228C1.20401 10.324 1.63334 8.61602 2.49201 7.10402C3.36934 5.57335 4.55468 4.38802 6.04801 3.54802C7.54134 2.68935 9.19334 2.26002 11.004 2.26002C13.076 2.26002 14.9053 2.77335 16.492 3.80002C18.0973 4.82668 19.264 6.27335 19.992 8.14002H16.94Z" stroke="black"/>
        <path d="M30.641 22.252C29.2036 22.252 27.897 21.9253 26.721 21.272C25.5636 20.6187 24.649 19.6947 23.977 18.5C23.3236 17.2867 22.997 15.8867 22.997 14.3C22.997 12.732 23.333 11.3507 24.005 10.156C24.6956 8.94268 25.629 8.01868 26.805 7.38402C27.981 6.73068 29.297 6.40402 30.753 6.40402C32.209 6.40402 33.525 6.73068 34.701 7.38402C35.877 8.01868 36.801 8.93335 37.473 10.128C38.1636 11.3227 38.509 12.7133 38.509 14.3C38.509 15.8867 38.1543 17.2867 37.445 18.5C36.7543 19.6947 35.8116 20.6187 34.617 21.272C33.4223 21.9253 32.097 22.252 30.641 22.252ZM30.641 20.012C31.5556 20.012 32.4143 19.7974 33.217 19.368C34.0196 18.9387 34.6636 18.2947 35.149 17.436C35.653 16.5774 35.905 15.532 35.905 14.3C35.905 13.068 35.6623 12.0227 35.177 11.164C34.6916 10.3054 34.057 9.67068 33.273 9.26002C32.489 8.83068 31.6396 8.61602 30.725 8.61602C29.7916 8.61602 28.933 8.83068 28.149 9.26002C27.3836 9.67068 26.7676 10.3054 26.301 11.164C25.8343 12.0227 25.601 13.068 25.601 14.3C25.601 15.5507 25.825 16.6054 26.273 17.464C26.7396 18.3227 27.3556 18.9667 28.121 19.396C28.8863 19.8067 29.7263 20.012 30.641 20.012Z" stroke="black"/>
        <path d="M61.6551 2.62402V22H59.1071V7.55202L52.6671 22H50.8751L44.4071 7.52402V22H41.8591V2.62402H44.6031L51.7711 18.64L58.9391 2.62402H61.6551Z" stroke="black"/>
        <path d="M72.6683 22.252C71.231 22.252 69.9243 21.9253 68.7483 21.272C67.591 20.6187 66.6763 19.6947 66.0043 18.5C65.351 17.2867 65.0243 15.8867 65.0243 14.3C65.0243 12.732 65.3603 11.3507 66.0323 10.156C66.723 8.94268 67.6563 8.01868 68.8323 7.38402C70.0083 6.73068 71.3243 6.40402 72.7803 6.40402C74.2363 6.40402 75.5523 6.73068 76.7283 7.38402C77.9043 8.01868 78.8283 8.93335 79.5003 10.128C80.191 11.3227 80.5363 12.7133 80.5363 14.3C80.5363 15.8867 80.1817 17.2867 79.4723 18.5C78.7817 19.6947 77.839 20.6187 76.6443 21.272C75.4497 21.9253 74.1243 22.252 72.6683 22.252ZM72.6683 20.012C73.583 20.012 74.4417 19.7974 75.2443 19.368C76.047 18.9387 76.691 18.2947 77.1763 17.436C77.6803 16.5774 77.9323 15.532 77.9323 14.3C77.9323 13.068 77.6897 12.0227 77.2043 11.164C76.719 10.3054 76.0843 9.67068 75.3003 9.26002C74.5163 8.83068 73.667 8.61602 72.7523 8.61602C71.819 8.61602 70.9603 8.83068 70.1763 9.26002C69.411 9.67068 68.795 10.3054 68.3283 11.164C67.8617 12.0227 67.6283 13.068 67.6283 14.3C67.6283 15.5507 67.8523 16.6054 68.3003 17.464C68.767 18.3227 69.383 18.9667 70.1483 19.396C70.9137 19.8067 71.7537 20.012 72.6683 20.012Z" stroke="black"/>
        <path d="M89.5985 19.648L94.3585 6.65602H97.0745L91.0545 22H88.0865L82.0665 6.65602H84.8105L89.5985 19.648Z" stroke="black"/>
        <path d="M100.898 4.16402C100.412 4.16402 100.002 3.99602 99.6658 3.66002C99.3298 3.32402 99.1618 2.91335 99.1618 2.42802C99.1618 1.94268 99.3298 1.53202 99.6658 1.19602C100.002 0.860016 100.412 0.692017 100.898 0.692017C101.364 0.692017 101.756 0.860016 102.074 1.19602C102.41 1.53202 102.578 1.94268 102.578 2.42802C102.578 2.91335 102.41 3.32402 102.074 3.66002C101.756 3.99602 101.364 4.16402 100.898 4.16402ZM102.13 6.65602V22H99.5818V6.65602H102.13Z" stroke="black"/>
        <path d="M120.472 13.74C120.472 14.2254 120.444 14.7387 120.388 15.28H108.124C108.218 16.792 108.731 17.9774 109.664 18.836C110.616 19.676 111.764 20.096 113.108 20.096C114.21 20.096 115.124 19.844 115.852 19.34C116.599 18.8174 117.122 18.1267 117.42 17.268H120.164C119.754 18.7427 118.932 19.9467 117.7 20.88C116.468 21.7947 114.938 22.252 113.108 22.252C111.652 22.252 110.346 21.9253 109.188 21.272C108.05 20.6187 107.154 19.6947 106.5 18.5C105.847 17.2867 105.52 15.8867 105.52 14.3C105.52 12.7133 105.838 11.3227 106.472 10.128C107.107 8.93335 107.994 8.01868 109.132 7.38402C110.29 6.73068 111.615 6.40402 113.108 6.40402C114.564 6.40402 115.852 6.72135 116.972 7.35602C118.092 7.99068 118.951 8.86802 119.548 9.98802C120.164 11.0893 120.472 12.34 120.472 13.74ZM117.84 13.208C117.84 12.2374 117.626 11.4067 117.196 10.716C116.767 10.0067 116.179 9.47468 115.432 9.12002C114.704 8.74668 113.892 8.56002 112.996 8.56002C111.708 8.56002 110.607 8.97068 109.692 9.79202C108.796 10.6134 108.283 11.752 108.152 13.208H117.84Z" stroke="black"/>
        <path d="M124.648 22.168C124.162 22.168 123.752 22 123.416 21.664C123.08 21.328 122.912 20.9173 122.912 20.432C122.912 19.9467 123.08 19.536 123.416 19.2C123.752 18.864 124.162 18.696 124.648 18.696C125.114 18.696 125.506 18.864 125.824 19.2C126.16 19.536 126.328 19.9467 126.328 20.432C126.328 20.9173 126.16 21.328 125.824 21.664C125.506 22 125.114 22.168 124.648 22.168Z" stroke="black"/>
        <path d="M135.147 22.252C133.971 22.252 132.916 22.056 131.983 21.664C131.049 21.2534 130.312 20.6933 129.771 19.984C129.229 19.256 128.931 18.4254 128.875 17.492H131.507C131.581 18.2574 131.936 18.8827 132.571 19.368C133.224 19.8534 134.073 20.096 135.119 20.096C136.089 20.096 136.855 19.8814 137.415 19.452C137.975 19.0227 138.255 18.4813 138.255 17.828C138.255 17.156 137.956 16.6614 137.359 16.344C136.761 16.008 135.837 15.6814 134.587 15.364C133.448 15.0654 132.515 14.7667 131.787 14.468C131.077 14.1507 130.461 13.6933 129.939 13.096C129.435 12.48 129.183 11.6774 129.183 10.688C129.183 9.90402 129.416 9.18535 129.883 8.53202C130.349 7.87868 131.012 7.36535 131.871 6.99202C132.729 6.60002 133.709 6.40402 134.811 6.40402C136.509 6.40402 137.881 6.83335 138.927 7.69202C139.972 8.55068 140.532 9.72668 140.607 11.22H138.059C138.003 10.4173 137.676 9.77335 137.079 9.28802C136.5 8.80268 135.716 8.56002 134.727 8.56002C133.812 8.56002 133.084 8.75602 132.543 9.14802C132.001 9.54002 131.731 10.0534 131.731 10.688C131.731 11.192 131.889 11.612 132.207 11.948C132.543 12.2654 132.953 12.5267 133.439 12.732C133.943 12.9187 134.633 13.1334 135.511 13.376C136.612 13.6747 137.508 13.9733 138.199 14.272C138.889 14.552 139.477 14.9813 139.963 15.56C140.467 16.1387 140.728 16.8947 140.747 17.828C140.747 18.668 140.513 19.424 140.047 20.096C139.58 20.768 138.917 21.3 138.059 21.692C137.219 22.0653 136.248 22.252 135.147 22.252Z" stroke="black"/>
        <path d="M145.66 4.16402C145.174 4.16402 144.764 3.99602 144.428 3.66002C144.092 3.32402 143.924 2.91335 143.924 2.42802C143.924 1.94268 144.092 1.53202 144.428 1.19602C144.764 0.860016 145.174 0.692017 145.66 0.692017C146.126 0.692017 146.518 0.860016 146.836 1.19602C147.172 1.53202 147.34 1.94268 147.34 2.42802C147.34 2.91335 147.172 3.32402 146.836 3.66002C146.518 3.99602 146.126 4.16402 145.66 4.16402ZM146.892 6.65602V22H144.344V6.65602H146.892Z" stroke="black"/>
        <path d="M154.342 8.75602V17.8C154.342 18.5467 154.501 19.0787 154.818 19.396C155.135 19.6947 155.686 19.844 156.47 19.844H158.346V22H156.05C154.631 22 153.567 21.6734 152.858 21.02C152.149 20.3667 151.794 19.2933 151.794 17.8V8.75602H149.806V6.65602H151.794V2.79202H154.342V6.65602H158.346V8.75602H154.342Z" stroke="black"/>
        <path d="M175.433 13.74C175.433 14.2254 175.405 14.7387 175.349 15.28H163.085C163.179 16.792 163.692 17.9774 164.625 18.836C165.577 19.676 166.725 20.096 168.069 20.096C169.171 20.096 170.085 19.844 170.813 19.34C171.56 18.8174 172.083 18.1267 172.381 17.268H175.125C174.715 18.7427 173.893 19.9467 172.661 20.88C171.429 21.7947 169.899 22.252 168.069 22.252C166.613 22.252 165.307 21.9253 164.149 21.272C163.011 20.6187 162.115 19.6947 161.461 18.5C160.808 17.2867 160.481 15.8867 160.481 14.3C160.481 12.7133 160.799 11.3227 161.433 10.128C162.068 8.93335 162.955 8.01868 164.093 7.38402C165.251 6.73068 166.576 6.40402 168.069 6.40402C169.525 6.40402 170.813 6.72135 171.933 7.35602C173.053 7.99068 173.912 8.86802 174.509 9.98802C175.125 11.0893 175.433 12.34 175.433 13.74ZM172.801 13.208C172.801 12.2374 172.587 11.4067 172.157 10.716C171.728 10.0067 171.14 9.47468 170.393 9.12002C169.665 8.74668 168.853 8.56002 167.957 8.56002C166.669 8.56002 165.568 8.97068 164.653 9.79202C163.757 10.6134 163.244 11.752 163.113 13.208H172.801Z" stroke="black"/>
        </svg>
        <h6 style={{color:'black',fontSize:'0.8rem'}}>Watch movies online for free</h6>
        </div>
        </div>
    <div>
  <Navbar  appearance='subtle'  style={{marginLeft:9}}>
    <Navbar.Body>
     {authCon.isAuthenticated?user:guestLinks}
     
    </Navbar.Body>
  </Navbar> 
</div>
</div>
      <div>
      <InputGroup size='md' inside className='searchbar'>
      <Input size='lg' placeholder='Enter Movies or series name...' onChange={handleSearch}  onPressEnter={handleEnter} 
      />
      <InputGroup.Button tyle={{ width: "50px" }} onClick={handleEnter}>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
</div>
    </nav>
    }
    </Fragment> 
  );
};

export default  withRouter(Navbari);
