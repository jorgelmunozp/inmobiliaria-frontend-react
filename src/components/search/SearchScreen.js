import React, { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getInmuebles } from '../../selectors/getInmuebles';
// import { getInmueblesByName } from '../../selectors/getInmueblesByName';
// import { getInmueblesByCategory } from '../../selectors/getInmueblesByCategory';
// import { getInmueblesByType } from '../../selectors/getInmueblesByType';
import { InmuebleCard } from '../inmueble/InmuebleCard';

import { Dropdown } from '../forms/dropdown/Dropdown';
import { InputText } from '../forms/inputs/InputText'
import { InputNumber } from '../forms/inputs/InputNumber'
import { InputRange } from '../forms/inputs/InputRange';


export const SearchScreen = ({ inmuebles,categorias,tipos }) => {

  /* Query's */
  let queryName= '';
  const [ formInputValues,handleInputChange ] = useForm({ searchText: queryName });
  let { searchText } = formInputValues;
  queryName = searchText;
    // let [ queryName, setQueryName ] = useState(searchText);
  let [ queryCategory, setQueryCategory ] = useState(''); 
  let [ queryType, setQueryType ] = useState('');
  let [ queryValueMin, setQueryValueMin] = useState(null);
  let [ queryValueMax, setQueryValueMax] = useState(null);

  // const inmueblesByName = useMemo( () => getInmueblesByName(queryName,inmuebles), [queryName,inmuebles] );
  // const inmueblesByCategory = useMemo( () => getInmueblesByCategory(queryCategory,inmuebles,categorias), [queryCategory,inmuebles,categorias] );
  // const inmueblesByType = useMemo( () => getInmueblesByType(queryType,inmuebles,tipos), [queryType,inmuebles,tipos] );

   const handleInputSearch = (target) => {
    handleInputChange(target);
    searchText = target.target.value;
  }

  const inmueblesFiltered = useMemo( () => getInmuebles(searchText,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos), [searchText,queryCategory,queryType,inmuebles,categorias,tipos] );
  // console.log("inmueblesFiltered: ",inmueblesFiltered)

  return (
    <>
      <hr />
      <center><h4>Buscar Inmueble</h4></center> 
      <hr />
      <h5>Que tipo de inmueble buscas?</h5>
      <hr />
      <div className='row'>
        <ul className='list-group list-group-horizontal-lg'>
          <li className='list-group-item border-white'>
            <InputText searchText={ searchText} handleInputSearch={ handleInputSearch } />
          </li>
          <li className='list-group-item border-white '>
            <Dropdown value={'Tipo inmueble'} query={queryCategory} parameters={categorias} setQuery={setQueryCategory} />
          </li>
          <li className='list-group-item border-white'>
            <Dropdown value={'Tipo negocio'} query={queryType} parameters={tipos} setQuery={setQueryType} />
          </li>
          <li className='list-group-item border-white'>
            <InputNumber limit={'desde'} value={queryValueMin} setQuery={setQueryValueMin} />
          </li>
          <li className='list-group-item border-white'>
            <InputNumber limit={'hasta'} value={queryValueMax} setQuery={setQueryValueMax}/>
          </li>
        </ul>    
      </div>
      <br></br>
      <div className=''>
        <h5>Inmuebles disponibles</h5>
        <hr />
        {
            (queryName === '' && queryCategory === '' && queryType === '' && queryValueMin === null && queryValueMax === null)
                ? <div className="alert alert-primary"> Inmuebles </div>
                : ( inmueblesFiltered.length === 0) 
                    && <div className="alert alert-danger"> No hay resultados: { queryName + ' ' + queryCategory + ' ' + queryType + ' ' + (queryValueMin !== null ? queryValueMin : '') + ' ' + (queryValueMax !== null ? queryValueMax : '') } </div>
        }
        <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
          {/* { inmueblesByName.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) }
          { inmueblesByCategory.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) }
          { inmueblesByType.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) } */}
          { inmueblesFiltered.map(inmueble => ( <InmuebleCard key={ inmueble.id } { ...inmueble } /> )) }
        </div>
      </div>
    </>
  )
}