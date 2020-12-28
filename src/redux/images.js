const initialState = {
  img: [],
  loading: false
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'img/load/start':
      return {
        ...state,
        loading: true
      }

    case 'img/load/success':
      return {
        ...state,
        img: action.payload,
        loading: false
      }

    default:
      return state;
  }
}