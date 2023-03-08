import { ADD_VIDEOGAME } from "./type";
import axios from "axios";
import { URL_ADD_VGAME } from "../../../utils/routes";

export default function addVideogame(payload) {
  return async function (dispatch) {
    return await axios.post(`${URL_ADD_VGAME}`, payload).then((res) => {
      console.log(res);
    });
    /* return dispatch({
      type: ADD_VIDEOGAME,
      payload: result.data,
    }); */
  };
}
