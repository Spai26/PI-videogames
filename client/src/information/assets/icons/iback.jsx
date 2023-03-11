import { Fragment } from "react";

const BackSVG = ({
  width = "20px",
  height = "20px",
  fill = "#000000",
  stroke = "none",
}) => {
  return (
    <Fragment>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        version="1.1"
        fill={fill}
        stroke={stroke}
      >
        <path d="M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z"></path>
      </svg>
    </Fragment>
  );
};

export default BackSVG;
