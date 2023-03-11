import { Fragment } from "react";

const OrderSVG = ({
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
            d="M87 384 c-17 -17 13 -24 104 -24 81 0 99 3 99 15 0 12 -18 15 -98 15
-54 0 -102 -3 -105 -6z"
          />
          <path
            d="M340 271 l0 -121 -25 6 c-33 8 -32 -6 5 -41 l30 -29 30 29 c35 33 39
50 10 42 -18 -5 -20 1 -22 111 -2 81 -7 117 -15 120 -10 3 -13 -25 -13 -117z"
          />
          <path
            d="M85 310 c-10 -16 17 -21 100 -18 52 2 80 7 83 16 5 15 -173 17 -183
2z"
          />
          <path
            d="M80 241 c0 -14 28 -21 85 -21 57 0 85 7 85 21 0 5 -38 9 -85 9 -47 0
-85 -4 -85 -9z"
          />
          <path
            d="M87 184 c-15 -16 9 -24 69 -24 50 0 64 3 64 15 0 12 -14 15 -63 15
-35 0 -67 -3 -70 -6z"
          />
          <path
            d="M87 114 c-15 -15 8 -24 59 -24 41 0 54 4 54 15 0 11 -13 15 -53 15
-30 0 -57 -3 -60 -6z"
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default OrderSVG;
