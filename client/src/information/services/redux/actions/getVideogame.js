import { URL_HOME } from "../../../utils/routes";
import { GET_VIDEOGAMES } from "./type";
import axios from "axios";

export default function getVideogames() {
  return async function (dispatch) {
    var result = await axios.get(URL_HOME);
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: result.data,
    });
  };
}

