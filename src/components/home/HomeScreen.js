import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleList } from '../inmueble/InmuebleList';
import { InputText } from '../forms/inputs/InputText';

export const HomeScreen = ({ inmuebles }) => {

  /* Query */
  let query = '';
  const [ formInputValues,handleInputChange ] = useForm({ inputText: query });
  let { inputText } = formInputValues;
  query = inputText;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(query,inmuebles), [query,inmuebles] );

  return (
    <>
      <hr />
      <center><h5>Inmuebles</h5></center> 
      <hr />
      <div className='row'>
        <div>
          <InputText placeholder={'🔎'} value={inputText} handleInput={handleInputChange} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' />
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



