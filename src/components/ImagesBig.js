import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadImg } from '../redux/actions'
import ImageBig from './ImageBig'

function ImagesBig (props) {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();

  const image = useSelector(state => state.images.img);

  useEffect(() => {
    dispatch(loadImg(id))
  }, [dispatch, id])

  return (
    <div className="imagesBig">
      <ImageBig image={image} key={image.id} />
    </div>
  )
}

export default ImagesBig;