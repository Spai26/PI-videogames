import { Fragment } from "react";

/**
 *
 * @param {*} props
 * * width - height - fill - stroke
 * @returns
 */
const StarSvg = ({
  fill = "none",
  stroke = "black",
  width = "20px",
  height = "20px",
}) => {
  return (
    <Fragment>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 173"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 141.292L34.5 171.167L50.875 111.417L1.75001 61.625L72.7083 56.6458L100 1.875L127.292 56.6458L198.25 61.625L149.125 111.417L165.5 171.167L100 141.292Z" />
      </svg>
    </Fragment>
  );
};

export default StarSvg;
