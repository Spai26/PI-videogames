import { Fragment } from "react";
import { icons } from "../../utils/utils";
const LogoIcons = ({ width = "20px", height = "20px" }) => {
  return (
    <Fragment>
      <img src={icons.logo} width={width} height={height} alt="logo" />
    </Fragment>
  );
};

export default LogoIcons;
