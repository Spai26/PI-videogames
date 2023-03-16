import { RESET_FILTER_ARRAY } from "./type";
export default function resetFilterArray() {
  return function (dispatch) {
    dispatch({ type: RESET_FILTER_ARRAY });
  };
}
