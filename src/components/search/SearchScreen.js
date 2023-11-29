import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';

export const SearchScreen = () => {

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
      <center><h4>Buscar Inmueble</h4></center> 
      <hr />

      <div className='row'> 
          <div className='col-5'>
            <h5>Que tipo de inmueble buscas?</h5>
            <hr />

            <form onSubmit={ handleSearch }>
              <input 
                type='text'
                placeholder='Ingresa nombre de inmueble'
                className='form-control px-2 py-2 rounded-pill text-center'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                // onChange={ handleInputChange }
                onChange={ handleInputChange }
              />
              <br/>
              <div className="">
                <button className='btn-buscar btn btn-lg btn-outline-info mt-1 w-100 py-2 rounded-pill'>
                  Buscar
                </button>
              </div>
            </form>

          </div>

          <div className='col-7'>
            <h5>Inmuebles disponibles</h5>
            <hr />
            {
                (q === '')
                    ? <div className="alert alert-primary"> Inmuebles </div>
                    : ( inmueblesFiltered.length === 0 ) 
                        && <div className="alert alert-danger"> No hay resultados: { q } </div>
            }

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
    </>
  )
}