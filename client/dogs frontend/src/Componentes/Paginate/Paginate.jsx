


const Paginate = ({dogs, dogsByPag, paginado}) => {
    
    const totalPaginas = Math.ceil(dogs.length/dogsByPag);
    
    const paginas = Array(totalPaginas).fill()
    
    const numPagina = []

    for (const paginate in paginas) {
       numPagina.push(Number(paginate)+1)
    }


    return(
    <div>

        <nav>
                
            <ul>
                { numPagina?.map(num => (
                    <li  onClick={() => paginado(num)} key={num}>
                         <button type="button">{num}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    )

}

export default Paginate