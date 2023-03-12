import Cards from "../../../videogames/components/Cards/Cards";
import Pagination from "./components/Paginate/Pagination";
import Filters from "./components/Filters/Filters";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import getVideogames from "../../../services/redux/actions/getVideogame";

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.gameSearch);

  /* elements for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [countGamePage, setCountGamePage] = useState(15);
  const lastPositionPage = currentPage * countGamePage;
  const firstPositionPage = lastPositionPage - countGamePage;
  const currentVg = videogames.slice(firstPositionPage, lastPositionPage);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  /* en to resource pagination */

  useEffect(() => {
    dispatch(getVideogames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <Filters />

      <Cards videogames={currentVg} />

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
