import React from 'react'

const SlideItem = (props) => {
    return (
        <div style={{position:'relative',width:'100%' ,height:'100%'}}>
      <div style={{position:'absolute',left:0,bottom:0}} className='text-center'>
      <div>
        <span className='sp' style={{borderRadius:'3px'}}>{props?.genre}</span>
        <h4 className='text-white'>{props?.title}</h4>
        </div>
      </div>
      </div>

    )
}

export default SlideItem
