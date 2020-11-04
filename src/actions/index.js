import React from "react"
import axios from "axios"

export const MOVIES_LIST = "MOVIES_LIST"


const getLoadingCommonAction = (type) => ({
  type: type,
  payload: {
    loading: true,
    data: [],
    error: ""
  }
})
const getSuccessCommonAction = (type, response) => ({
  type: type,
  payload: {
    loading: false,
    data: response,
    error: ""
  }
})
const getErrorCommonAction = (type) => ({
  type: type,
  payload: {
    loading: false,
    data: [],
    error: "Error"
  }
})

export function getMovies(payload) {
  console.log("Hello ", payload)
  return function (dispatch) {
    dispatch(getLoadingCommonAction(MOVIES_LIST))
    return axios
      .post(
        "https://api.igdb.com/v4/games", "", {
        headers:
        {
          'Accept': 'application/json',
          'Client-ID': 'cgzidepa1tufbi0t1eto5t8lsvvgr8',
          'Authorization': `Bearer y5e2dawiiox3rhxqshfej5ntped0m8`
        }
      }
      )
      .then((response) => {
        console.log("response ", response)
        if (response.data.response.Status) {
          dispatch(
            getSuccessCommonAction(MOVIES_LIST, response.data.response.Data)
          )
        } else {
          dispatch(
            getErrorCommonAction(MOVIES_LIST)
          )
        }
      })
      .catch((error) => {
        dispatch(getErrorCommonAction(MOVIES_LIST))
      })
  }
}

// export function moviesList() {
//   console.log("test");
//   return {
//     type: "GET_MOVIES_LIST",
//     data: [
//       { name: "one", image: "imageUrl" },
//       { name: "two", image: "imageUrl2" },
//       { name: "three", image: "imageUrl3" },
//     ],
//   };
// }
