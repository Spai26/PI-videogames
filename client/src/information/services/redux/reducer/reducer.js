import { GET_GENRES, GET_VIDEOGAMES } from "../actions/type";

const initialState = {
  videogames: [],
  genres: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload.data,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
}
