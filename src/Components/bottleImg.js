import React from 'react'
import './comp.css';
function BottleImg(props) {
  return (
    <div className='BottleImg'>
        <img className="bottleImg" src={props.image}/>
    </div>
  )
}
export default BottleImg
