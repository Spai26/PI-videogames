import ButtonGoToHome from "../../Partials/Button/ButtonWithURL";

const Landing = () => {
  //life is not a game but... gaming is my life
  return (
    <div className="landing">
      <ButtonGoToHome rute="/home" text="Go to Home" />
    </div>
  );
};

export default Landing;
