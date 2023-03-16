import { ORDER_VIDEOGAMES } from "./type";

export default function orderByRatingVideogames(value) {
  return {
    type: ORDER_VIDEOGAMES,
    payload: value,
  };
}
