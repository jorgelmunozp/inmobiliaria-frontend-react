import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { inmuebles } from '../../data/inmuebles';

import { PiMagnifyingGlass } from "react-icons/pi";
import { CiCircleChevLeft,CiCircleChevRight } from "react-icons/ci";

export const HomeScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [ formValues,handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(q), [q] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  };

  const itemPerPage = 9;
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);
  const [numPages, setNumPages] = useState(Math.floor(inmuebles.length/itemPerPage));

  // setNumPages(Math.floor(inmueblesFiltered.length/itemPerPage));

  let indexPages = [];
  for(let i = 0; i <= numPages; i++) {
    indexPages.push(i);
  }

  return (
    <>
      <hr />
      <center><h4>Inmuebles</h4></center> 
      <hr />

      <div className='row'> 
          <div className=''>
            <form onSubmit={ handleSearch }>
              <input 
                type='search'
                placeholder='🔎'
                className='form-control px-2 py-2 rounded-pill text-center'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={ handleInputChange }
                onInput={ handleSearch }
              />
            </form>
          </div>

          <nav aria-label="Page navigation" className='mt-3'>
            <ul className="pagination justify-content-center">
              <li className="page-item rounded-circle">
                <a className="page-link rounded-circle page-arrow" href="#" aria-label="Previous">
                  <span aria-hidden="true">⬅️</span>
                </a>
              </li>
              {
                (q === '')
                ? indexPages.map(i => (
                    <li key={i} className="page-item"><button value={i} className="page-link rounded-circle" onClick={(event)=>setIndexPage([parseInt(event.target.value)*itemPerPage,(parseInt(event.target.value) + 1)*itemPerPage])}>{i+1}</button></li>
                  ))
                : indexPages.map(i => (
                    <li key={i} className="page-item"><button value={i} className="page-link rounded-circle" onClick={(event)=>setIndexPage([parseInt(event.target.value)*itemPerPage,(parseInt(event.target.value) + 1)*itemPerPage])}>{i+1}</button></li>
                  ))
              }
              <li className="page-item">
                <a className="page-link rounded-circle page-arrow" href="#" aria-label="Next">
                  <span aria-hidden="true">➡️</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className=''>
            {
                (q === '')
                    ? <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
                        {
                            inmuebles.slice(indexPage[0],indexPage[1]).map(inmueble => (
                                <InmuebleCard
                                    key={ inmueble.id }
                                    { ...inmueble }
                                />
                            ))
                        }
                      </div>
                    : ( inmueblesFiltered.length === 0 ) 
                        && <div className="alert alert-danger"> No hay resultados: { q } </div>
            }
            <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
              {
                  inmueblesFiltered.slice(indexPage[0],indexPage[1]).map(inmueble => (
                      <InmuebleCard
                          key={ inmueble.id }
                          { ...inmueble }
                      />
                  ))
              }
            </div>
          </div>
      </div>
    </>
  )
}



