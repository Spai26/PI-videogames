import { Fragment } from "react";

const ArrowDownSVG = ({
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
        fill={fill}
      >
        <g
          transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
          stroke={stroke}
        >
          <path
            d="M64 329 c-4 -7 32 -50 85 -103 l93 -91 84 90 c75 81 98 115 77 115
-4 0 -44 -36 -88 -80 l-81 -80 -78 80 c-43 44 -80 80 -82 80 -1 0 -6 -5 -10
-11z"
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default ArrowDownSVG;
