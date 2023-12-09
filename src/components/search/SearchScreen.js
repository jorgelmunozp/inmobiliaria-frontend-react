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
  // const inmueblesByName = useMemo( () => getInmueblesByName(queryName,inmuebles), [queryName,inmuebles] );

  let [ queryCategory, setQueryCategory ] = useState('');
  // const inmueblesByCategory = useMemo( () => getInmueblesByCategory(queryCategory,inmuebles,categorias), [queryCategory,inmuebles,categorias] );
  
  let [ queryType, setQueryType ] = useState('');
  // const inmueblesByType = useMemo( () => getInmueblesByType(queryType,inmuebles,tipos), [queryType,inmuebles,tipos] );

   const handleInputSearch = (target) => {
    handleInputChange(target);
    searchText = target.target.value;
  }

  const inmueblesFiltered = useMemo( () => getInmuebles(searchText,queryCategory,queryType,inmuebles,categorias,tipos), [searchText,queryCategory,queryType,inmuebles,categorias,tipos] );
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
            <InputNumber limit={'desde'} />
          </li>
          <li className='list-group-item border-white'>
            <InputNumber limit={'hasta'}/>
          </li>
        </ul>    
      </div>
      <br></br>
      <div className=''>
        <h5>Inmuebles disponibles</h5>
        <hr />
        {
            (queryName === '' && queryCategory === '' && queryType === '')
                ? <div className="alert alert-primary"> Inmuebles </div>
                : ( inmueblesFiltered.length === 0) 
                    && <div className="alert alert-danger"> No hay resultados: { queryName || queryCategory || queryType  } </div>
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