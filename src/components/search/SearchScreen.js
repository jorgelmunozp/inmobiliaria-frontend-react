import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmuebles } from '../../selectors/getInmuebles';
import { SearchBar } from '../search/SearchBar';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { Equis } from '../icons/equis/Equis';

import { formatterPeso } from '../../helpers/formatterPeso';

export const SearchScreen = ({ inmuebles,categorias,tipos }) => {

  /* Query's */
  let queryName = '';
  const [ inputTextValue,handleInputTextChange ] = useForm({ searchText: queryName });
  let { searchText } = inputTextValue;
  queryName = searchText;

  let [ queryCategory, setQueryCategory ] = useState(''); 
  let [ queryType, setQueryType ] = useState('');
  
  let queryValueMin = '';
  const [ inputNumberValueMin,handleInputNumberMinChange ] = useForm({ searchValueMin: queryValueMin });
  let { searchValueMin } = inputNumberValueMin;
  queryValueMin = searchValueMin;

  let queryValueMax = '';
  const [ inputNumberValueMax,handleInputNumberMaxChange ] = useForm({ searchValueMax: queryValueMax });
  let { searchValueMax } = inputNumberValueMax;
  queryValueMax = searchValueMax;

   const handleInputText = (target) => {
    handleInputTextChange(target);
    searchText = target.target.value;
  }

  const handleInputNumberMin = (target) => {
    handleInputNumberMinChange(target);
    searchValueMin = target.target.value;
    queryValueMin = searchValueMin;
  }

  const handleInputNumberMax = (target) => {
    handleInputNumberMaxChange(target);
    searchValueMax = target.target.value;
    queryValueMax = searchValueMax;
  }

  const inmueblesFiltered = useMemo( () => getInmuebles(searchText,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos), [searchText,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos] );
  // console.log("inmueblesFiltered: ",inmueblesFiltered)

  return (
    <>
      <hr />
      <center><h5>Buscar Inmueble</h5></center> 
      <hr />
      <h6>Que tipo de inmueble buscas?</h6>
      <hr />
      <div className=''>
        <SearchBar searchText={ searchText} queryCategory={queryCategory} queryType={queryType} 
                   queryValueMin={queryValueMin} queryValueMax={queryValueMax}
                   handleInputText={ handleInputText } setQueryCategory={setQueryCategory} setQueryType={setQueryType} 
                   handleInputNumberMin={handleInputNumberMin} handleInputNumberMax={handleInputNumberMax} 
                   categorias={categorias} tipos={tipos}
                   />
      </div>
      <br></br>
      <div className=''>
        <h6>Inmuebles disponibles</h6>
        <hr />
        {
            (queryName === '' && queryCategory === '' && queryType === '' && queryValueMin === '' && queryValueMax === '')
                ? <div className="alert alert-primary"> Inmuebles </div>
                : ( inmueblesFiltered.length === 0) 
                    && <div className="alert alert-danger"> 
                          <p>🔎 No hay resultados</p>
                          <div className='bg-white rounded pt-3 pb-1 px-3'>
                            <p className='text-justify'>{ queryName ? <Equis /> : '' }{ queryName ? ' No hay inmuebles llamados ' : '' }<b>{ queryName ? queryName : '' }</b></p>
                            <p className='text-justify'>{ (queryValueMin || queryValueMax) ? <Equis /> : '' }{ (queryValueMin || queryValueMax) ? ' No hay inmuebles en el rango de precios desde ' : '' }<b>{ (queryValueMin || queryValueMax) ? formatterPeso.format(queryValueMin) : '' }</b>{ (queryValueMin || queryValueMax) ? ' hasta ' : '' }<b>{ (queryValueMin || queryValueMax) ? formatterPeso.format(queryValueMax) : '' }</b></p>
                          </div>
                          <br></br>
                       </div>
        }
        <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
           { inmueblesFiltered.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) }
        </div>
      </div>
    </>
  )
}