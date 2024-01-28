import React, { useState } from 'react';
import { InmuebleCard } from './InmuebleCard';
import { PaginationBar } from '../../bars/pagination/PaginationBar';
import { SortingBar } from '../../bars/sort/SortingBar';
import { WhiteLine } from '../../forms/whiteline/WhiteLine';

export const InmuebleList = ({ inmuebles }) => {
  const urlBaseFrontend = process.env.REACT_APP_URL_BASE_FRONTEND;

  /* Query */
  let query = '';
  const inmueblesFiltered = [];

  /* Pagination */
  const [itemPerPage, setItemPerPage ] = useState(8);                 // Se define el número de items por página
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);       // Se calculan los indices de la paginación para el filtro Slice(x,y) que entrega un rango de los items de x a y
  const numPages = ((query.length === 0) ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  const resPages = ((query.length === 0) ? inmuebles.length%itemPerPage : inmueblesFiltered.length%itemPerPage);                   // Se calcula la cantidad de páginas = cantidad de items/item por página

  let indexPages = [];
  let activePage = [true];                                            // [true]
  if(resPages !== 0 ){
    for(let i = 0; i <= numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  } else if(resPages === 0 ){
    for(let i = 0; i < numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  }

  const [activePages, setActivePages] = useState(activePage);         // [true,false,false,false]

  /* Sort */
  const [sortBy, setSortBy] = useState(0);
  function sortByName(a, b) { return a.detalle.nombre.localeCompare(b.detalle.nombre); }
  function sortByValueUp(a, b) { return a.detalle.valor - b.detalle.valor; }
  function sortByValueDown(a, b) { return b.detalle.valor - a.detalle.valor; }
  function sortByShuffle(a, b) { return 0.5 - Math.random(); }

  return (
    <>
      <SortingBar setSortBy={ setSortBy } />
      <WhiteLine />
      <div className='row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-3 animate__animated animate__fadeIn'>
        { 
          inmuebles.sort(sortBy === 1 ? sortByName : ( sortBy === 2 ? sortByValueUp : ( sortBy === 3 ? sortByValueDown : sortByShuffle ) )).slice(indexPage[0],indexPage[1]).map( 
            inmueble => ( <InmuebleCard key={ inmueble.id } urlBaseFrontend={urlBaseFrontend} { ...inmueble } /> ))
        }
      </div>
      <PaginationBar query={query} array={inmuebles} arrayFiltered={inmueblesFiltered} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
    </>
  )
}
