import axios from "axios";
import { URL_ADD_VGAME } from "../../../utils/routes";
import { GET_VGAMESBYNAME } from "./type";

export default function getGameByName(value) {
  return async function (dispatch) {
    try {
      const result = await axios.get(`${URL_ADD_VGAME}?name=${value}`);
      return dispatch({
        type: GET_VGAMESBYNAME,
        payload: result.data,
      });
    } catch (e) {
      console.log("Error in action get_gameByName");
    }
  };
}
