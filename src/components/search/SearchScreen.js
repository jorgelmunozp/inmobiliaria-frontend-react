import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmuebles } from '../../selectors/getInmuebles';
import { SearchBar } from '../search/SearchBar';
import { InmuebleCard } from '../inmueble/InmuebleCard';

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
  console.log("inmueblesFiltered: ",inmueblesFiltered)

  return (
    <>
      <hr />
      <center><h4>Buscar Inmueble</h4></center> 
      <hr />
      <h5>Que tipo de inmueble buscas?</h5>
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
        <h5>Inmuebles disponibles</h5>
        <hr />
        {
            (queryName === '' && queryCategory === '' && queryType === '' && queryValueMin === '' && queryValueMax === '')
                ? <div className="alert alert-primary"> Inmuebles </div>
                : ( inmueblesFiltered.length === 0) 
                    && <div className="alert alert-danger"> 
                          <p>🔎 No hay resultados</p>
                          <li>{ queryName ? 'No hay inmuebles llamados ' + queryName : '' }</li>
                          <li>{ (queryValueMin || queryValueMax) ? 'No hay inmuebles en el rango de precios desde ' + formatterPeso.format(queryValueMin) + ' hasta ' + formatterPeso.format(queryValueMax) : '' }</li>
                          <br></br>
                          <ul className='list-group list-group-horizontal-lg'>
                            <li className='list-group-item fw-bolder border-white w-100'><span className='text-dark'>{ queryName ? 'Inmueble' : '' }</span> <span className='text-muted'>{ queryName ? queryName : '' }</span></li>
                            <li className='list-group-item fw-bolder border-white w-100'><span className='text-dark'>{ queryCategory ? 'Tipo inmueble' : '' }</span> <span className='text-muted'>{ queryCategory ? queryCategory : '' }</span></li>
                            <li className='list-group-item fw-bolder border-white w-100'><span className='text-dark'>{ queryType ? 'Tipo negocio' : '' }</span> <span className='text-muted'>{ queryType ? queryType : '' }</span></li>
                            <li className='list-group-item fw-bolder border-white w-100'><span className='text-dark'>{ queryValueMin ? 'Precio mínimo' : '' }</span> <span className='text-muted'>{ queryValueMin ? formatterPeso.format(queryValueMin) : '' }</span></li>
                            <li className='list-group-item fw-bolder border-white w-100'><span className='text-dark'>{ queryValueMax ? 'Precio máximo' : '' }</span> <span className='text-muted'>{ queryValueMax ? formatterPeso.format(queryValueMax) : '' }</span></li>
                          </ul>
                       </div>
        }
        <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
           { inmueblesFiltered.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) }
        </div>
      </div>
    </>
  )
}