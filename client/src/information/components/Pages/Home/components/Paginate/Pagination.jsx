import ArrowLeftSVG from "../../../../../assets/icons/ileftarrow";
import ArrowRightSVG from "../../../../../assets/icons/irightarrow";
import styles from "./Pagination.module.css";

/**
 * !TODO:
 * @param {countGamePage} "cantidad de juegos a mostrar por pagina"
 * @param {allItem} "tamaño del array"
 * @param {currentPage} "posicion de pagina"
 * @param {onChangePage} "funcion de cambio de estado para currentPage"
 * @returns
 */

const Pagination = ({ countGamePage, allItem, currentPage, onChangePage }) => {
  const pagesToShow = [];
  const maxPage = Math.ceil(allItem / countGamePage);

  for (let i = 0; i < maxPage; i++) {
    pagesToShow.push(i + 1);
  }

  const handleOnchangePage = (page) => {
    onChangePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className={styles.navigation}>
        <button
          className={styles.page}
          disabled={currentPage === 1}
          onClick={() => handleOnchangePage(currentPage - 1)}
        >
          <ArrowLeftSVG fill="white" width="30px" height="30px" />
        </button>

        {pagesToShow &&
          pagesToShow.map((page, index) => {
            const isActivePage = currentPage === page;
            const pageClass = isActivePage
              ? `${styles.activePage} ${styles.page}`
              : `${styles.page}`;
            return (
              <div key={index} className={pageClass}>
                <button onClick={() => handleOnchangePage(page)}>{page}</button>
              </div>
            );
          })}

        <button
          className={styles.page}
          disabled={currentPage === maxPage}
          onClick={() => handleOnchangePage(currentPage + 1)}
        >
          <ArrowRightSVG fill="white" width="30px" height="30px" />
        </button>
      </section>
    </>
  );
};

export default Pagination;
