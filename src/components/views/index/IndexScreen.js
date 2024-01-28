import React, { useMemo, useState } from 'react';
import { getInmueblesByName } from '../../../selectors/getInmueblesByName';
import { InmuebleList } from '../inmueble/InmuebleList';
import { InputText } from '../../forms/inputs/InputText';
import { Equis } from '../../icons/equis/Equis';
import { WhiteLine } from '../../forms/whiteline/WhiteLine';

import { Logo } from '../../icons/logo/Logo';

export const IndexScreen = ({ inmuebles }) => {
  let [ queryName, setQueryName ] = useState('');                     // Query

  const inmueblesFiltered = useMemo( () => getInmueblesByName(queryName,inmuebles.filter( inmueble => inmueble.detalle.estado.toLowerCase().includes('disponible'))), [queryName,inmuebles] );

  return (
    <>
      <div className='header flex-nowrap mt-5 pb-5'>
        <center>
          <Logo strokeWidth={1} height={6} width={6} /><h1>La Inmobiliaria</h1>
        </center>
      </div>
      <h5 className='my-4'><center>Inmuebles</center></h5>
      <div className='row'>
        <div>
          <p className='container-fluid'>
            <center>
              <a className="form-control border border-muted text-center shadow-sm w-100" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
                🔎
              </a>
            </center>
          </p>
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
        <div className='container-fluid'>
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



