import { Fragment } from "react";

const HamburgerSVG = ({
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
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={fill}
          stroke={stroke}
        >
          <path
            d="M95 4146 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
          />
          <path
            d="M95 2546 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
          />
          <path
            d="M95 946 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8
785 -10 2474 -8 l2437 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27
21 -2447 2 c-2019 2 -2452 0 -2477 -11z"
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default HamburgerSVG;
