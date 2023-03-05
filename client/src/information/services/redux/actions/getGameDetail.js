import { GET_VIDEOGAME_DETAIL } from "./type";
import axios from "axios";
import { URL_VGAME_DETAIL } from "../../../utils/routes";

export default function getGameDetail(id) {
  return async function (dispatch) {
    var result = await axios.get(`${URL_VGAME_DETAIL}/${id}`);    
    return dispatch({
      type: GET_VIDEOGAME_DETAIL,
      payload: result.data,
    });
  };
}
