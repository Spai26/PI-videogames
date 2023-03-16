import Cards from "../../../videogames/components/Cards/Cards";
import Pagination from "./components/Paginate/Pagination";
import Filters from "./components/Filters/Filters";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import getVideogames from "../../../services/redux/actions/getVideogame";
import setError from "../../../services/redux/actions/setError";
import ErrorsMsg from "../../Partials/Errors/Errors";

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.gameSearch);
  const messageError = useSelector((state) => state.messageError);

  /* elements for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const countGamePage = 15;
  const lastPositionPage = currentPage * countGamePage;
  const firstPositionPage = lastPositionPage - countGamePage;
  /* const currentVg =  */

  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  /* end to resource pagination */

  useEffect(() => {
    let timer;
    if (messageError) {
      timer = setTimeout(() => {
        dispatch(setError(""));
      }, 3000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageError]);

  useEffect(() => {
    dispatch(getVideogames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <Filters />
      {messageError && <ErrorsMsg message={messageError} />}
      {currentPage && <Cards videogames={videogames.slice(firstPositionPage, lastPositionPage)} />}

      <Pagination
        countGamePage={countGamePage}
        allItem={videogames.length}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </main>
  );
};

export default Home;
