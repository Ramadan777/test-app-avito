const initialState = {
  images: [],
  loading: false,
  opened: null,
  comments: [],
  loadingComments: false
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'img/load/start':
      return {
        ...state,
        loading: true,
        opened: action.payload
      }

    case 'img/load/success':
      return {
        ...state,
        images: action.payload,
        comments: action.payload.comments,
        loading: false
      }

    case 'close/modal':
      return {
        ...state,
        opened: null
      }

    default:
      return state;
  }
}