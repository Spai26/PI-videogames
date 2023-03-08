import { Fragment, useState } from "react";

const TextareaFrom = (props) => {
  const [height, setHeight] = useState("auto");

  /* auto resize */
  const handleInput = (event) => {
    props.onChange(event);
    setHeight(`${event.target.scrollHeight}px`);
  };

  return (
    <Fragment>
      <textarea
        className={props.class}
        style={{ height }}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onInput={handleInput}
        required
      />
    </Fragment>
  );
};

export default TextareaFrom;
