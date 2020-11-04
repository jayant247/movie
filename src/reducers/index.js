import { MOVIES_LIST } from '../actions'

const initialStates = {
  movies: [],
  moviesLoaded: false
}

const reducer = (state=initialStates, action) => {
  switch (action.type) {
    case MOVIES_LIST:
      console.log("test reducer")
      return {
        ...state,
        movies: action.payload.data,
        moviesLoaded: true
      }
    default:
      return state
  }
}

export default reducer