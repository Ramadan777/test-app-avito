import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, loadImg } from '../../redux/actions'
import ImageBig from './ImageBig'
import Comment from './Comment'

function ImagesBig (props) {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();

  const image = useSelector(state => state.images.images);
  const opened = useSelector(state => state.images.opened);
  const comments = useSelector(state => state.images.comments);
  const loadingComments = useSelector(state => state.images.loadingComments);

  useEffect(() => {
    dispatch(loadImg(id))
  }, [dispatch, id]);

  if(opened === null) {
    return null;
  }

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="modal">
        {loadingComments ? (
          <div>
            идет загрузка...
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-image">
              <div className="imagesBig">
                <ImageBig image={image} key={image.id} />
              </div>
              <div className="modal-comment">
                {comments.map(comment => {
                  return <Comment comment={comment} key={comment.id} />
                })}
              </div>
            </div>
            <div className="modal-name">
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

            <div className="close" onClick={handleClick}>
              ❌️
            </div>
          </div>
        )}
      </div>
      <div className="deactiv"></div>
    </div>

  )
}

export default ImagesBig;