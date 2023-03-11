const ArrowRigthSVG = ({
  width = "20px",
  height = "20px",
  fill = "#000000",
  stroke = "none",
}) => {
  return (
    <>
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
            d="M1819 4027 c-64 -34 -102 -93 -107 -166 -8 -112 -33 -83 601 -718
l582 -583 -582 -583 c-634 -635 -609 -606 -601 -718 8 -110 93 -189 206 -189
29 0 70 7 90 17 42 18 1314 1280 1365 1353 36 52 47 133 27 196 -10 32 -142
169 -679 707 -446 447 -679 674 -707 687 -57 28 -138 27 -195 -3z"
          />
        </g>
      </svg>
    </>
  );
};

export default ArrowRigthSVG;
