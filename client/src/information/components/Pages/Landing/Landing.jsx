import ButtonGoToHome from "../../Partials/Button/ButtonWithURL";
import getGenres from "../../../services/redux/actions/getGenres";
import getVideogames from "../../../services/redux/actions/getVideogame";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Landing.module.css";

const Landing = () => {
  const dispatch = useDispatch();

  //life is not a game but... gaming is my life

  useEffect(() => {
    dispatch(getVideogames);
  });

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="landing">
      <ButtonGoToHome rute="/home" text="Go to Home" animate={true} />
    </div>
  );
};

export default Landing;
