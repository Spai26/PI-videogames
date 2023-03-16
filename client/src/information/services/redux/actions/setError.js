import { ERROR_MSG } from "./type";

export default function setError(message) {
  return {
    type: ERROR_MSG,
    payload: message,
  };
}
