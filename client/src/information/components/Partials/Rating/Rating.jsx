import { Fragment } from "react";
import Start from "../../../assets/icons/star/Star";
const Rating = ({ rating }) => {
  const MAX_RATING = 5;
  const estrellas = [];

  for (let i = 1; i <= MAX_RATING; i++) {
    const fill = i <= rating ? "yellow" : "#999";
    estrellas.push(<Start key={i} fill={fill} />);
  }

  return <Fragment>{estrellas}</Fragment>;
};

export default Rating;
