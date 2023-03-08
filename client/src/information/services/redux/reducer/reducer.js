import {
  ADD_VIDEOGAME,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
} from "../actions/type";

const initialState = {
  videogames: [],
  videogameDetail: [],
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
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload.data,
      };

    case ADD_VIDEOGAME:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
