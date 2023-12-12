import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleList } from '../inmueble/InmuebleList';
import { InputText } from '../forms/inputs/InputText';

export const HomeScreen = ({ inmuebles }) => {

  /* Query */
  let query = '';
  const [ formInputValues,handleInputChange ] = useForm({ searchText: query });
  let { searchText } = formInputValues;
  query = searchText;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(query,inmuebles), [query,inmuebles] );

  return (
    <>
      <hr />
      <center><h5>Inmuebles</h5></center> 
      <hr />
      <div className='row'>
        <div>
          <input placeholder='🔎' value={ searchText } onInput={ handleInputChange }
            type='search' id='searchText' name='searchText' autoComplete='off'
            className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' 
          />
          {/* <InputText placeholder={'🔎'} handleInput={handleInputChange} className='shadow-sm' /> */}
        </div>
        <div>&nbsp;</div>
        <div>
          {
            (query === '')
              ? <InmuebleList inmuebles={inmuebles} /> 
              : inmueblesFiltered.length === 0 ? <div className="alert alert-danger"> No hay resultados 🔎 { query } </div> 
                                               : <InmuebleList inmuebles={inmueblesFiltered} /> 
          }
        </div>
      </div>
    </>
  )
}



