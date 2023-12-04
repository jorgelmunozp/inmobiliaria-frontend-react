import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';

export const SearchScreen = ({ inmuebles }) => {

  /* Query */
  let query= '';
  const navigate = useNavigate();
  const [ formInputValues,handleInputChange ] = useForm({ searchText: query });
  let { searchText } = formInputValues;
  query = searchText;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(query,inmuebles), [query,inmuebles] );

  const handleSearch = () => {

    
  };

  const handleInputSearch = (target) => {
    handleInputChange(target);
    searchText = target.target.value
    handleSearch();
  }

  return (
    <>
      <hr />
      <center><h4>Buscar Inmueble</h4></center> 
      <hr />

      <div className='row'> 
          <div className='col-5'>
            <h5>Que tipo de inmueble buscas?</h5>
            <hr />

            {/* <form onSubmit={ handleSearch }> */}
              <input 
                type='text'
                placeholder='Ingresa nombre de inmueble'
                className='form-control px-2 py-2 rounded-pill text-center'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                // onChange={ handleInputChange }
                onChange={ handleInputSearch }
              />
              <br/>
              {/* <div className="">
                <button className='btn-buscar btn btn-lg btn-outline-info mt-1 w-100 py-2 rounded-pill'>
                  Buscar
                </button>
              </div> */}
            {/* </form> */}

          </div>

          <div className='col-7'>
            <h5>Inmuebles disponibles</h5>
            <hr />
            {
                (query === '')
                    ? <div className="alert alert-primary"> Inmuebles </div>
                    : ( inmueblesFiltered.length === 0 ) 
                        && <div className="alert alert-danger"> No hay resultados: { query } </div>
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