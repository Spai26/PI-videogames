/* import { ADD_VIDEOGAME } from "./type"; */
import axios from "axios";
import { URL_ADD_VGAME } from "../../../utils/routes";
import { ADD_VIDEOGAME } from "./type";

export default function addVideogame(payload) {
  return async function (dispatch) {
    var result = await axios.post(`${URL_ADD_VGAME}`, payload);
    return result;
  };
}
/* 
return await axios.post(`${URL_ADD_VGAME}`, payload).
then((res) => {
        return dispatch({
          type: ADD_VIDEOGAME,
          payload: result.data,
        });
      }); */
