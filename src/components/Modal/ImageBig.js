import React from 'react'

function ImageBig (props) {

  return (
    <div className="img">
        <img src={props.image.url} alt=""/>
    </div>
  )
}

export default ImageBig;