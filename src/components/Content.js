import React from 'react'
import ImagesBig from './ImagesBig'

function Content (props) {

  return (
    <div className="content">
      <ImagesBig />
      <div className="input-name">
        <input placeholder="Ваше имя" type="text"/>
      </div>
      <div className="input-comment">
        <input placeholder="Ваш комментарий" type="text"/>
      </div>
      <div className="button">
        <button>
          Оставить коментарий
        </button>
      </div>
    </div>
  )
}

export default Content