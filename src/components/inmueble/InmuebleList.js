import React, { useState } from 'react';
import { InmuebleCard } from './InmuebleCard';
import { PaginationBar } from '../pagination/PaginationBar';

export const InmuebleList = ({ inmuebles }) => {
  /* Query */
  let query = '';
  const inmueblesFiltered = [];
  
  
  const [itemPerPage, setItemPerPage ] = useState(9);                   // Se define el número de items por página
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);         // Se calculan los indices de la paginación para el filtro Slice(x,y) que entrega un rango de los items de x a y
  const numPages = ((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                    // Se calcula la cantidad de páginas = cantidad de items/item por página
  let [,setNumPages] = useState(((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage)));     // Se calcula la cantidad de páginas = cantidad de items/item por página

  let indexPages = [];
  let activePage = [true];                                        // [true]
  for(let i = 0; i <= numPages; i++) { 
    indexPages.push(i);                                           // [0,1,2,3]
    if(i < 0) { activePage.push(false); }                         // [true,false,false,false]
  }      
  const [activePages, setActivePages] = useState(activePage);     // [true,false,false,false]

  return (
    <>
      <PaginationBar query={query} inmuebles={inmuebles} inmueblesFiltered={inmueblesFiltered} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
      <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
        { 
          inmuebles.slice(indexPage[0],indexPage[1]).map( inmueble => (
            <InmuebleCard key={ inmueble.id } { ...inmueble } />
          ))
        }
      </div>
    </>
  )
}
