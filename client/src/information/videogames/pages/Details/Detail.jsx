import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import getGameDetail from "../../../services/redux/actions/getGameDetail";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const vdetail = useSelector((state) => state.videogameDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vdetail, dispatch]);
  return (
    <div>
      <img src={vdetail.image} alt={vdetail.name} />
      <h1>{vdetail.name}</h1>
      <p>{vdetail.description}</p>
      <p>{vdetail.platform}</p>
      <p>{vdetail.released}</p>
      <p>{vdetail.rating}</p>
      <p>{vdetail.genres}</p>
      <button onClick={() => navigate.push("/home")}>Back to Home</button>
    </div>
  );
};

export default Detail;
