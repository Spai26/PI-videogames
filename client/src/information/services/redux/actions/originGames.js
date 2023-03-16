import { ORIGIN_VIDEOGAME } from "./type";

export default function orderOriginGame(value) {
  return {
    type: ORIGIN_VIDEOGAME,
    payload: value,
  };
}
