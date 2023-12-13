import React, { useMemo, useState } from 'react';
import { getInmuebles } from '../../selectors/getInmuebles';
import { SearchBar } from '../search/SearchBar';
import { InmuebleList } from '../inmueble/InmuebleList';
import { Equis } from '../icons/equis/Equis';

import { formatterPeso } from '../../helpers/formatterPeso';

export const SearchScreen = ({ inmuebles,categorias,tipos }) => {
  let [ queryName, setQueryName ] = useState('');                               // Query's
  let [ queryCategory, setQueryCategory ] = useState(''); 
  let [ queryType, setQueryType ] = useState('');
  let [ queryValueMin, setQueryValueMin ] = useState(''); 
  let [ queryValueMax, setQueryValueMax ] = useState(''); 

  const inmueblesFiltered = useMemo( () => getInmuebles(queryName,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos), [queryName,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos] );

  return (
    <>
      <hr />
      <center><h5>Buscar Inmueble</h5></center> 
      <hr />
      <h6>Que tipo de inmueble buscas?</h6>
      <hr />
      <div>
        <SearchBar queryName={queryName} queryCategory={queryCategory} queryType={queryType} 
                   queryValueMin={queryValueMin} queryValueMax={queryValueMax}
                   setQueryName={setQueryName} setQueryCategory={setQueryCategory} setQueryType={setQueryType}
                   setQueryValueMin={setQueryValueMin} setQueryValueMax={setQueryValueMax} 
                   categorias={categorias} tipos={tipos}
                   />
      </div>
      <br></br>
      <div>
        <h6>Inmuebles disponibles</h6>
        <hr />
        {
            (queryName === '' && queryCategory === '' && queryType === '' && queryValueMin === '' && queryValueMax === '')
                ? <div className="alert alert-primary"> Inmuebles </div>
                : inmueblesFiltered.length === 0 ? <div className="alert alert-danger"> 
                                                        <p>🔎 No hay resultados</p>
                                                        <div className='bg-white rounded pt-3 pb-1 px-3'>
                                                          <p className='text-justify'>{ queryName ? <Equis /> : '' }{ queryName ? ' No hay inmuebles llamados ' : '' }<b>{ queryName ? queryName : '' }</b></p>
                                                          <p className='text-justify'>{ (queryValueMin || queryValueMax) ? <Equis /> : '' }{ (queryValueMin || queryValueMax) ? ' No hay inmuebles en el rango de precios' : '' }{ queryValueMin ? ' desde ' : '' }<b>{ queryValueMin ? formatterPeso.format(queryValueMin.replaceAll(',','.')) : '' }</b>{ queryValueMax ? ' hasta ' : '' }<b>{ queryValueMax ? formatterPeso.format(queryValueMax.replaceAll(',','.')) : '' }</b></p>
                                                        </div>
                                                        <br></br>
                                                    </div>
                                                  : <InmuebleList inmuebles={inmueblesFiltered} /> 
        }
      </div>
    </>
  )
}