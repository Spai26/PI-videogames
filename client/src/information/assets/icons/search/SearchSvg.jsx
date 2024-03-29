import { Fragment } from "react";

const SearchSvg = ({
  stroke = "none",
  fill = "#000000",
  width = "20px",
  height = "20px",
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
        fill={fill}
        stroke={stroke}
      >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
          <path
            d="M2085 4376 c-701 -115 -1239 -656 -1341 -1348 -22 -151 -15 -420 15
-560 186 -862 1011 -1408 1881 -1242 232 44 470 154 676 315 l61 47 414 -415
c228 -228 426 -421 441 -429 99 -52 196 45 144 144 -8 15 -201 213 -429 441
l-415 414 47 61 c299 384 409 853 311 1322 -128 615 -615 1100 -1239 1235
-123 27 -444 35 -566 15z m527 -226 c175 -37 325 -100 474 -198 311 -207 520
-514 600 -882 22 -101 30 -342 15 -453 -84 -627 -571 -1114 -1198 -1198 -111
-15 -352 -7 -453 15 -549 119 -964 533 -1082 1079 -29 136 -32 407 -5 540 113
560 551 997 1102 1101 126 24 131 25 295 21 107 -3 185 -10 252 -25z"
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default SearchSvg;
