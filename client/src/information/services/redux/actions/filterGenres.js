import { FILTER_GENRES } from "./type";

export default function filterGenres(value) {
  return {
    type: FILTER_GENRES,
    payload: value,
  };
}
