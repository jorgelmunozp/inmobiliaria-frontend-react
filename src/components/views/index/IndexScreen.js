import React, { useMemo, useState } from 'react';
import { getInmueblesByName } from '../../../selectors/getInmueblesByName';
import { InmuebleList } from '../inmueble/InmuebleList';
import { InputText } from '../../forms/inputs/InputText';
import { Equis } from '../../icons/equis/Equis';

import { Logo } from '../../icons/logo/Logo';

export const IndexScreen = ({ inmuebles }) => {
  let [ queryName, setQueryName ] = useState('');                     // Query

  const inmueblesFiltered = useMemo( () => getInmueblesByName(queryName,inmuebles.filter( inmueble => inmueble.detalle.estado.toLowerCase().includes('disponible'))), [queryName,inmuebles] );

  return (
    <>
      <div className='header flex-nowrap pt-5 pb-3 shadow-light w-100' >
        <center className='py-0 py-lg-2'>
          <Logo strokeWidth={1} height={7} width={7} /><h1 className='title mb-3 mb-lg-3 mb-md-2 mg-sm-3'>La Inmobiliaria</h1>
        </center>
      </div>
      <h5 className='my-2 my-lg-3 pt-2 pt-lg-4 pb-2'><center>Inmuebles</center></h5>
      <div className='row'>
        <div>
          <center>
            <p className='container-fluid'>
              <a className="form-control border border-muted text-center shadow-sm w-100" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
                🔎
              </a>
            </p>
          </center>
        </div>
        <div className="collapse" id="collapseContent">
          <div className='container-fluid'>
            <div className="card card-body">
              <div>
                <InputText id={'buscar-inmueble'} placeholder={'Buscar inmueble'} value={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted border-1 text-center shadow-sm' />
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className='container-fluid px-4'>
          {
            (queryName === '')
              ? <InmuebleList inmuebles={inmuebles.filter( inmueble => inmueble.detalle.estado.toLowerCase().includes('disponible') )} /> 
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
      </div>
    </>
  )
}



