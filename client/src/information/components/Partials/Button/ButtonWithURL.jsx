import { Link } from "react-router-dom";
/**
 *
 * @param {*} props
 * * style, text, rute
 * @returns
 */
const ButtonWithImage = ({
  style = "btn",
  text,
  rute,
  icon,
  animate = false,
}) => {
  return (
    <>
      <Link to={rute} className={style}>
        {icon && icon}
        {text}
        {animate ? (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          ""
        )}
      </Link>
    </>
  );
};

export default ButtonWithImage;
