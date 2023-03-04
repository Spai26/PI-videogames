import { URL_GENDERS } from "../../../utils/routes";
import { GET_GENRES } from "./type";
import axios from "axios";

export default function getGenres() {
  return async function (dispatch) {
    var result = await axios(URL_GENDERS);
    return dispatch({
      type: GET_GENRES,
      payload: result.data,
    });
  };
}
