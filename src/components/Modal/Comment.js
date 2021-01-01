import React from 'react'

function Comment (props) {

  return (
    <div>
      <div className="comment-date">
        {props.comment.date}
      </div>
      <div className="comment-text">
        {props.comment.text}
      </div>
    </div>
  )
}

export default Comment