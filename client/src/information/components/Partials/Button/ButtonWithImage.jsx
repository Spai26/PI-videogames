import { Fragment } from "react";

const ButtonWithImage = ({
  style = "btn_basic",
  type = "submit",
  text,
  fnOnClick,
}) => {
  return (
    <Fragment>
      <div className={style} type={type} onClick={fnOnClick}>
        {text}
      </div>
    </Fragment>
  );
};

export default ButtonWithImage;
