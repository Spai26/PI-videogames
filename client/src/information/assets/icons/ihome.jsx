const HomeSVG = ({
  width = "20px",
  height = "20px",
  fill = "#000000",
  stroke = "none",
}) => {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 48.000000 48.000000"
        preserveAspectRatio="xMidYMid meet"
        fill={fill}
        stroke={stroke}
      >
        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)">
          <path
            d="M145 351 c-82 -71 -98 -91 -71 -91 13 0 16 -13 16 -74 0 -88 9 -98
77 -94 l48 3 3 48 c3 38 7 47 22 47 15 0 19 -9 22 -47 l3 -48 48 -3 c68 -4 77
6 77 94 0 59 3 74 15 74 8 0 15 4 15 9 0 5 -7 14 -15 21 -9 7 -15 29 -15 51 0
29 -4 39 -16 39 -9 0 -22 -7 -28 -15 -10 -14 -17 -11 -53 20 -23 19 -47 35
-55 34 -7 0 -49 -31 -93 -68z m156 -12 l59 -51 0 -84 0 -84 -35 0 -35 0 0 50
0 50 -50 0 -50 0 0 -50 0 -50 -35 0 -35 0 0 83 -1 82 58 52 c32 29 60 53 62
53 2 0 30 -23 62 -51z"
          />
        </g>
      </svg>
    </div>
  );
};

export default HomeSVG;
