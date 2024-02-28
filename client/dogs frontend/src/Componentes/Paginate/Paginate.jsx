import Styles from "./Paginate.module.css";

const Paginate = ({ dogs, dogsByPag, paginado, currentPage }) => {
  const totalPaginas = Math.ceil(dogs.length / dogsByPag);

  const paginas = Array(totalPaginas).fill();

  const numPagina = [];

  for (const paginate in paginas) {
    numPagina.push(Number(paginate) + 1);
  }

  return (
    <div>
      <nav className={Styles.nav}>
        <ul>
          {numPagina?.map((num) => (
            <li key={num}>
              <button
                className={`${Styles.select} ${num === currentPage ? Styles.currentPage : ""}`}
                type="button"
                onClick={() => paginado(num)}
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
