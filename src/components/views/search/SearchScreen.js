import { Suspense, lazy, useMemo, useState } from 'react';
import { getInmuebles } from '../../../selectors/getInmuebles.js';
import { formatterPeso } from '../../../helpers/formatterPeso.js';
const InmuebleList = lazy(() => import('../inmueble/InmuebleList.js'));
const SearchBar = lazy(() => import('./SearchBar.js'));
const Equis = lazy(() => import('../../icons/equis/Equis.js'));

const SearchScreen = ({ inmuebles,categorias,tipos }) => {
  let [ queryName, setQueryName ] = useState('');                               // Query's
  let [ queryCategory, setQueryCategory ] = useState(''); 
  let [ queryType, setQueryType ] = useState('');
  let [ queryValueMin, setQueryValueMin ] = useState(''); 
  let [ queryValueMax, setQueryValueMax ] = useState(''); 

  const inmueblesFiltered = useMemo( () => getInmuebles(queryName,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos), [queryName,queryCategory,queryType,queryValueMin,queryValueMax,inmuebles,categorias,tipos] );

  return (
    <div className='px-4'>
      <h5 className='my-3 my-lg-4 my-md-4 my-sm-5'><center>Buscar Inmueble</center></h5> 
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
                                                  : <Suspense fallback={<center><div className="loader"></div></center>}><InmuebleList inmuebles={inmueblesFiltered} /></Suspense>
        }
      </div>
    </div>
  )
}
export default SearchScreen;