import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';

export const HomeScreen = ({ inmuebles }) => {

  /* Query */
  let query = '';
  const [ formInputValues,handleInputChange ] = useForm({ searchText: query });
  let { searchText } = formInputValues;
  query = searchText;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(query,inmuebles), [query,inmuebles] );

  /* Pagination */
  const [itemPerPage, setItemPerPage ] = useState(8);                   // Se define el número de items por página
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);         // Se calculan los indices de la paginación para el filtro Slice(x,y) que entrega un rango de los items de x a y
  // const [numPages, setNumPages] = useState(((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage)));  // Se calcula la cantidad de páginas = cantidad de items/item por página
  const numPages = ((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                    // Se calcula la cantidad de páginas = cantidad de items/item por página
  let [,setNumPages] = useState(((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage)));     // Se calcula la cantidad de páginas = cantidad de items/item por página

  let indexPages = [];
  let activePage = [true];                                        // [true]
  for(let i = 0; i <= numPages; i++) { 
    indexPages.push(i);                                           // [0,1,2,3]
    if(i < 0) { activePage.push(false); }                         // [true,false,false,false]
  }      
  const [activePages, setActivePages] = useState(activePage);     // [true,false,false,false]

  /* Search */
  const handleSearch = () => {
    const inmueblesFiltered = getInmueblesByName(searchText,inmuebles);
    if(inmueblesFiltered.length > 0) {
      setNumPages(Math.floor(inmueblesFiltered.length/itemPerPage));
      if (numPages > 0) {
        activePage = [true]
        for(let i = 0; i < numPages; i++) { 
          if(i > 0) { activePage.push(false); }                   // [true,false,false,false]
        }
        setActivePages(activePage);     
      }
    } else if(inmueblesFiltered.length === 0) {
      setNumPages(Math.floor(inmuebles.length/itemPerPage));
    }
  };

  const handleInputSearch = (target) => {
    handleInputChange(target);
    searchText = target.target.value
    handleSearch();
  }

  return (
    <>
      <hr />
      <center><h4>Inmuebles</h4></center> 
      <hr />
      <div className='row'> 
        <div className=''>
          <input placeholder='🔎' value={ searchText }
            type='search' id='searchText' name='searchText' autoComplete='off'
            className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm'
            onInput={ handleInputSearch } /* onChange={ handleInputSearch } */
          />
        </div>
        <nav aria-label="Page navigation" className='mt-3'>
          <ul className="pagination pagination-sm justify-content-center">
            <li className="page-item"><button onClick={()=>{if(indexPage[0] >= 1){ setIndexPage([indexPage[0] - itemPerPage,indexPage[1] - itemPerPage]);const indexCurrentPage = activePages.indexOf(true);activePages.fill(false);activePages[indexCurrentPage-1]=true;setActivePages(activePages);console.log("activePages LeftArrow:",activePages)} }} type='button' className="page-link rounded-circle page-arrow" aria-label="◃">◃</button></li>
            {
              indexPages.map(i => (
                  <li key={i} className={activePages[i] ? "page-item active" : "page-item"}><button value={i} onClick={(event)=>{setIndexPage([parseInt(event.target.value)*itemPerPage,(parseInt(event.target.value) + 1)*itemPerPage]);activePages.fill(false);activePages[i]=true;setActivePages(activePages);}} type='button' className="page-link rounded-circle fw-bolder">{i+1}</button></li>
                ))
            }
            <li className="page-item"><button onClick={()=>{if(indexPage[0] < ( (query === '') ? inmuebles.length-itemPerPage : inmueblesFiltered.length-itemPerPage) ){ setIndexPage([indexPage[0] + itemPerPage,indexPage[1] + itemPerPage]);const indexCurrentPage = activePages.indexOf(true);activePages.fill(false);activePages[indexCurrentPage+1]=true;setActivePages(activePages);console.log("activePages LeftRight:",activePages)}}} type='button' className="page-link rounded-circle page-arrow" aria-label="▹">▹</button></li>
          </ul>
        </nav>

        <div>
          {
            (query === '')
              ? <div className='row row-cols-1 row-cols-md-4 g-1 animate__animated animate__fadeIn'>
                  {
                    inmuebles.slice(indexPage[0],indexPage[1]).map(inmueble => (
                      <InmuebleCard key={ inmueble.id } { ...inmueble } />
                    ))
                  }
                </div>
              : ( inmueblesFiltered.length === 0 ) 
                  && <div className="alert alert-danger"> No hay resultados: { query } </div>
          }
          <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
            {
              inmueblesFiltered.slice(indexPage[0],indexPage[1]).map(inmueble => (
                <InmuebleCard key={ inmueble.id } { ...inmueble } />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}



