import { ORDER_BY_NAME } from "./type";

export default function orderByNameVideogames(value) {
  return function (dispatch) {
    dispatch({
      type: ORDER_BY_NAME,
      payload: value,
    });
  };
}
