import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../Home/Home.module.css";
import { allTempe, filterDogs, orderDogs } from "../../redux/actions_types";

const Home = () => {
  const dispatch = useDispatch();
  const [filtro, setFiltro] = useState("");
  const [orden, setOrden] = useState("");
  const [origen, setOrigen] = useState("");
  const [tempe, setTempe] = useState("");
  const [direction, setDirection] = useState("");
  const dogs = useSelector((state) => state.dogs);
  const temperamentos = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsByPag = 8;
  const totalPaginas = Math.ceil(dogs.length / dogsByPag);
  const lastIndex = currentPage * dogsByPag;
  const firstIndex = lastIndex - dogsByPag;
  const currentDogs = dogs.slice(firstIndex, lastIndex);

  const paginado = (Number) => {
    setCurrentPage(Number);
  };
  useEffect(() => {
    dispatch(allTempe());
  }, [dispatch]);

  const applyOrder = () => {
    dispatch(orderDogs(orden, direction));
  };

  const applyFilter = () => {
    if (filtro === "temperamento") {
      dispatch(filterDogs(filtro, tempe));
    } else if (filtro === "origen") {
      dispatch(filterDogs(filtro, origen));
    }
  };
  return (
    <div className={Styles.contenedorPrincipal}>
      <div>
        <div className={Styles.desplegables}>
          <select onChange={(event) => setFiltro(event.target.value)}>
            <option value="">Filtrar por</option>
            <option value="temperamento">Temperamentos</option>
            <option value="origen">Origen</option>
          </select>

          {filtro === "temperamento" && (
            <div>
              <select onChange={(event) => setTempe(event.target.value)}>
                {temperamentos?.map((tempe) => (
                  <option key={tempe.id} value={tempe.name}>
                    {tempe.name}
                  </option>
                ))}
              </select>
              <button onClick={applyFilter}>Filtrar🐶</button>
            </div>
          )}

          {filtro === "origen" && (
            <div>
              <select onChange={(event) => setOrigen(event.target.value)}>
                <option value="">Selecciona un Origen</option>
                <option value="api">Api</option>
                <option value="database">Base de datos</option>
              </select>
              <button onClick={applyFilter}>Filtrar🐶</button>
            </div>
          )}

          <select onChange={(event) => setOrden(event.target.value)}>
            <option value="">Ordenar por</option>
            <option value="A-Z">A-Z</option>
            <option value="Peso">Peso</option>
          </select>

          <select onChange={(event) => setDirection(event.target.value)}>
            <option value="asc">Ascendente</option>
            <option value="des">Descendente</option>
          </select>
          <button onClick={applyOrder}>Aplicar Orden</button>
        </div>
        <h2 className={Styles.titulo}>Tus Dogs</h2>

        <div className={Styles.contenedorCards}>
          {currentDogs?.map((dog) => (
            <div key={dog.id}>
              {dog.source === "api" ? (
                <Card
                  id={dog.id}
                  image={dog.image}
                  name={dog.name}
                  temperaments={dog.temperament?.join(", ")}
                  weight={`Entre ${dog.weight_min} - ${dog.weight_max} kg`}
                />
              ) : (
                <Card
                  id={dog.id}
                  image={dog.image}
                  weight={`Entre ${dog.weight_min} - ${dog.weight_max} kg`}
                  name={dog.name}
                  temperaments={dog.Temperaments?.map((tempe) => tempe.name).join(", ")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.paginas}>
        <Paginate dogsByPag={dogsByPag} dogs={dogs} paginado={paginado} currentPage={currentPage} />
      </div>
      {currentPage > 1 && (
        <button className={Styles.button} onClick={() => paginado(currentPage - 1)}>
          Anterior
        </button>
      )}
      {currentPage < totalPaginas && (
        <button className={Styles.button} onClick={() => paginado(currentPage + 1)}>
          Siguiente{" "}
        </button>
      )}
    </div>
  );
};

export default Home;
