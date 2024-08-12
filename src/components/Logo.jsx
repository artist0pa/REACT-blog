import React from 'react'
import image from '../images/download (1).jpeg'
function Logo({width = '10px'}) {
  return (
    <div className='width-[60px] drop-shadow-sm'><img className='w-[50px] rounded-md' src={image}></img></div>
  )
}

export default Logo