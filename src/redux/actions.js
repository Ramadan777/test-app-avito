export const loadPhotos = () => {
  return(dispatch) => {
    dispatch({
      type: 'photos/load/start'
    });

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'photos/load/success',
          payload: json
        })
      })
  }
}

export const loadImg = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'img/load/start'
    })

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'img/load/success',
          payload: json
        })
      })
  }

}