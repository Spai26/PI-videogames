import {
  ADD_VIDEOGAME,
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  GET_VGAMESBYNAME,
  FILTER_GENRES,
  ORIGIN_VIDEOGAME,
  RESET_FILTER_ARRAY,
  ORDER_VIDEOGAMES,
  ORDER_BY_NAME,
  ERROR_MSG,
} from "../actions/type";

const initialState = {
  videogames: [],
  videogameDetail: [],
  genres: [],
  filterGenres: [],
  gameSearch: [],
  messageError: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload.data,
        gameSearch: action.payload.data,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload.data,
      };
    /*********************** */
    case GET_VGAMESBYNAME:
      return {
        ...state,
        gameSearch: action.payload,
      };
    /***************************** */
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload.data,
      };
    case ADD_VIDEOGAME:
      return {
        ...state,
      };
    case FILTER_GENRES:
      const allgen = [...state.filterGenres, action.payload];
      const gamesfiltered = state.gameSearch.filter((g) =>
        allgen.every((gen) => g.genres && g.genres.includes(gen))
      );
      return {
        ...state,
        filterGenres: [...state.filterGenres, action.payload],
        status: gamesfiltered,
        gameSearch: gamesfiltered,
      };
    case ORIGIN_VIDEOGAME:
      const originVg = state.videogames;

      if (action.payload === "bd") {
        return {
          ...state,
          gameSearch: originVg.filter((g) => g.origin === "bd"),
        };
      } else if (action.payload === "api") {
        return {
          ...state,
          gameSearch: originVg.filter((g) => g.origin === "api"),
        };
      } else {
        return {
          ...state,
          gameSearch: state.videogames,
        };
      }
    case RESET_FILTER_ARRAY:
      return {
        ...state,
        filterGenres: [],
      };
    case ORDER_VIDEOGAMES:
      const copyOrder = [...state.gameSearch];
      const order = copyOrder.sort((a, b) => {
        if (a.rating > b.rating) {
          return "ascending" === action.payload ? 1 : -1;
        }
        if (a.rating < b.rating) {
          return "descending" === action.payload ? 1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        gameSearch: order || state.gameSearch,
      };
    case ORDER_BY_NAME:
      const copyByName = [...state.gameSearch];
      const byOrder = copyByName.sort((a, b) => {
        if (a.name < b.name) {
          return "a-z" === action.payload ? -1 : 1;
        }
        if (a.name > b.name) {
          return "z-a" === action.payload ? -1 : 1;
        }
        return 0;
      });
      return {
        ...state,
        gameSearch: byOrder,
      };

    case "RESET_ORDER_GAME":
      return {
        ...state,
        order
      };
    case ERROR_MSG:
      return {
        ...state,
        messageError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
