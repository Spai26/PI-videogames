import { Fragment } from "react";

const GenreSVG = ({
  width = "20px",
  height = "20px",
  fill = "#000000",
  stroke = "none",
}) => {
  return (
    <Fragment>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 48.000000 48.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
          fill={fill}
          stroke={stroke}
        >
          <path
            d="M330 401 c0 -6 5 -13 10 -16 23 -14 -11 -36 -45 -29 -37 7 -89 -15
-99 -41 -17 -45 7 -115 40 -115 18 0 17 10 -1 34 -44 58 30 131 78 78 19 -21
22 -57 7 -67 -13 -8 -13 -45 0 -45 19 0 42 61 36 95 -7 34 15 68 29 45 13 -22
25 -8 25 30 l0 40 -40 0 c-22 0 -40 -4 -40 -9z"
          />
          <path
            d="M134 249 c-10 -20 -14 -43 -10 -62 8 -39 -9 -61 -34 -44 -24 14 -38
2 -24 -21 8 -12 8 -22 0 -34 -13 -22 0 -35 22 -22 12 8 22 8 34 0 23 -14 35 0
21 24 -16 25 6 43 41 34 32 -8 83 12 96 37 23 42 0 119 -36 119 -18 0 -17 -10
1 -34 44 -58 -30 -131 -78 -78 -19 21 -22 57 -7 67 13 8 13 45 0 45 -5 0 -17
-14 -26 -31z"
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default GenreSVG;
