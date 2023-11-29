import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { inmuebles } from '../../data/inmuebles';

import { PiMagnifyingGlass } from "react-icons/pi";

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

  return (
    <>
      <hr />
      <center><h3>Inmuebles</h3></center> 
      <hr />

      <div className='row'> 
          <div className=''>
            <form onSubmit={ handleSearch }>
              <input 
                type='search'
                placeholder='Que tipo de inmueble buscas?'
                className='form-control px-2 py-2 rounded-pill text-center'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                // onChange={ handleInputChange }
                onChange={ handleInputChange }
                onInput={ handleSearch }
              />
              <br/>
              {/* <div className="">
                <button className='btn-buscar btn btn-lg btn-outline-info mt-1 w-100 py-2 rounded-pill'>
                  Buscar <PiMagnifyingGlass />
                </button>
              </div> */}
            </form>

          </div>

          <div className=''>
            <hr />
            <center><h5>Inmuebles disponibles</h5></center>
            <hr />
            {
                (q === '')
                    ? <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
                        {
                            inmuebles.map(inmueble => (
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
                  inmueblesFiltered.map(inmueble => (
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



