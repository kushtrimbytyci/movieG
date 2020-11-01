import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import playbtn from './images/playbtn.png'


const Slide = (props) => {
  const params = {
    slidesPerView: 5,
    spaceBetween: 30,
    true: 1,
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loopFillGroupWithBlank: true,
    watchOverflow:true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }

return (
  <Swiper {...params}>
 <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[0].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[0]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[0]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>

      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[1].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[1]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[1]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[2].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[2]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[2]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[3].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[3]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[3]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[4].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[4]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[4]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[5].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[5]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[5]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[6].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[6]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[6]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[7].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[7]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[7]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[8].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[8]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[8]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[9].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[9]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[9]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[10].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[10]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[10]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[11].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[11]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[11]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[12].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[12]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[12]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[13].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[13]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[13]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[14].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[14]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[1]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[20].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[20]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[20]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[15].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[15]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[15]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[16].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[16]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[16]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[17].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[17]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[17]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[18].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[18]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[18]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>
      <div className='sldiv' onClick={()=>window.location.assign(`${props.pr[19].link}`)} style={{position:'relative',cursor:'pointer',marginRight:'30px',maxWidth:'232px',maxHeight:'260px'}}><img src={props.pr[19]?.src} alt="1" width='100%' height='100%'/>
        <span className='sp'><h2 style={{    fontSize: '14px',
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: '#fff',
    position:'relative',
    top:'10px',
    textShadow: '0 0 2px rgba(0,0,0,0.6)',
    lineHight: '1.1',textTransform:'uppercase'}}>{props.pr[19]?.genre}</h2>
    <span className='text-white'><img src={playbtn} width='20' alt=""/> Watch Now!</span></span>
      </div>



 </Swiper>
)
}
export default Slider;