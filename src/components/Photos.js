import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

function Photos (props) {
  const photos = useSelector(state => state.photos.photos);


  return (
    <div className="photos">
      {photos.map(photo => {
        return <Photo photo={photo} key={photo.id} />
      })}
    </div>
  )
}

export default Photos;