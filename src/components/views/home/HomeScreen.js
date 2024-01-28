import React, { useMemo, useState } from 'react';
import { getInmueblesByName } from '../../../selectors/getInmueblesByName';
import { InmuebleList } from '../inmueble/InmuebleList';
import { InputText } from '../../forms/inputs/InputText';
import { Equis } from '../../icons/equis/Equis';

export const HomeScreen = ({ inmuebles }) => {
  let [ queryName, setQueryName ] = useState('');                     // Query
  const inmueblesFiltered = useMemo( () => getInmueblesByName(queryName,inmuebles), [queryName,inmuebles] );
  
  return (
    <>
      <h5 className='my-3 my-lg-4 my-md-4 my-sm-5'><center>Todos los Inmuebles</center></h5> 
      <div className='row'>
        <p>
          <a className="form-control border border-muted text-center shadow-sm w-100" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
            🔎
          </a>
        </p>
        <div className="collapse" id="collapseContent">
          <div className="card card-body">
            <div>
              <InputText id={'buscar-inmueble'} placeholder={'Buscar inmueble'} value={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' />
            </div>
          </div>
        </div>
        <div>
          { 
            (queryName === '')
              ? <InmuebleList inmuebles={inmuebles} /> 
              : inmueblesFiltered.length === 0 ? <div className="alert alert-danger"> 
                                                    <p>🔎 No hay resultados</p>
                                                    <div className='bg-white rounded pt-3 pb-1 px-3'>
                                                      <p className='text-justify'>{ queryName ? <Equis /> : '' }{ queryName ? ' No hay inmuebles llamados ' : '' }<b>{ queryName ? queryName : '' }</b></p>
                                                    </div>
                                                    <br></br>
                                                 </div> 
                                               : <InmuebleList inmuebles={inmueblesFiltered} /> 
          }
        </div>
      </div>
    </>
  )
}



