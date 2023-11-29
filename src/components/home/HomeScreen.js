import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { inmuebles } from '../../data/inmuebles';

export const HomeScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [ formValues,handleInputChange ] = useForm({ searchText: q, });
  const { searchText } = formValues;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(q), [q] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
    // setNumPages(Math.floor(inmueblesFiltered.length/itemPerPage));
  };

  const [itemPerPage, setItemPerPage ] = useState(9);
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);
  const [numPages, setNumPages] = useState(Math.floor(inmuebles.length/itemPerPage));
  // setNumPages(Math.floor(inmueblesFiltered.length/itemPerPage));
  let indexPages = [];
  for(let i = 0; i <= numPages; i++) { indexPages.push(i); }

  return (
    <>
      <hr />
      <center><h4>Inmuebles</h4></center> 
      <hr />

      <div className='row'> 
          <div className=''>
            <form onSubmit={ handleSearch }>
              <input 
                placeholder='🔎' value={ searchText }
                type='search' name='searchText' autoComplete='off'
                className='form-control px-2 py-2 rounded-pill text-center'
                onChange={ handleInputChange } onInput={ handleSearch }
              />
            </form>
          </div>

          <nav aria-label="Page navigation" className='mt-3'>
            <ul className="pagination justify-content-center">
              <li className="page-item rounded-circle"><button onClick={()=>{if(indexPage[0] >= 1){ setIndexPage([indexPage[0] - itemPerPage,indexPage[1] - itemPerPage])} }} value="arrowLeft" className="page-link rounded-circle page-arrow" aria-label="⬅">⬅️</button></li>
              {
                (q === '')
                ? indexPages.map(i => (
                    <li key={i} className="page-item"><button value={i} onClick={(event)=>setIndexPage([parseInt(event.target.value)*itemPerPage,(parseInt(event.target.value) + 1)*itemPerPage])} className="page-link rounded-circle">{i+1}</button></li>
                  ))
                : indexPages.map(i => (
                    <li key={i} className="page-item"><button value={i} onClick={(event)=>setIndexPage([parseInt(event.target.value)*itemPerPage,(parseInt(event.target.value) + 1)*itemPerPage])} className="page-link rounded-circle">{i+1}</button></li>
                  ))  // Cambiar!!!!!!!!!!!!!!!!!!!!!
              }
              <li className="page-item"><button onClick={()=>{if(indexPage[0] < inmuebles.length-itemPerPage){ setIndexPage([indexPage[0] + itemPerPage,indexPage[1] + itemPerPage])}}} value="arrowRight" className="page-link rounded-circle page-arrow" aria-label="➡">➡️</button></li>
            </ul>
          </nav>

          <div className=''>
            {
              (q === '')
                ? <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
                    {
                      inmuebles.slice(indexPage[0],indexPage[1]).map(inmueble => (
                          <InmuebleCard key={ inmueble.id } { ...inmueble } />
                      ))
                    }
                  </div>
                : ( inmueblesFiltered.length === 0 ) 
                    && <div className="alert alert-danger"> No hay resultados: { q } </div>
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



