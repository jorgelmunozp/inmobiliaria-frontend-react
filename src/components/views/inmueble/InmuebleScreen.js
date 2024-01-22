import React, { useMemo, useState } from 'react'
import { useParams, Navigate, useNavigate} from 'react-router-dom'
import { getInmuebleById } from '../../../selectors/getInmuebleById';
import { formatterPeso } from '../../../helpers/formatterPeso';

export const InmuebleScreen = ({ inmuebles }) => {
  const { inmuebleId } = useParams();
  const inmueble = useMemo( () => getInmuebleById(inmuebleId,inmuebles),[ inmuebleId,inmuebles ] );

  const navigate = useNavigate();
  const handleReturn = () => { navigate( -1 ); }

  if(!inmueble) { return <Navigate to='/' /> };
  const { id,detalle } = inmueble;

  return (
    <div className='row mt-5'>
      <div id="slider" className="carousel slide" data-bs-ride="carousel">        {/* <!-- Carousel --> */}
        <div className="carousel-inner">                                          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-item active">
            <img src={ detalle.imagen.data } alt="Foto" className="img-inmueble d-block shadow img-thumbnail animate__animated animate__fadeIn" />
          </div>
          {
            detalle.images.map(image => (
              <div className="carousel-item" key={image.name}>
                <img src={ image.data } id={image.name} key={image.name} alt={image.name} className="img-inmueble d-block shadow img-thumbnail animate__animated animate__fadeIn" />
              </div>            
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">      {/* <!-- Left and right controls/icons --> */}
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        <div className="carousel-indicators">       {/* <!-- Indicators/dots --> */}
          <button type="button" data-bs-target="#slider" data-bs-slide-to={0} key={0} className="active"></button>
          {
            detalle.images.map((image,index) => (
              <button type="button" data-bs-target="#slider" data-bs-slide-to={index + 1} key={index + 1}></button>
            ))
          }
        </div>
      </div>
      <p></p>
      <div className='animate__animated animate__fadeIn'>
        <h1>{ detalle.nombre }</h1>
        <hr></hr>
        <ul className='list-group list-group-horizontal-sm'>
          <li className='list-group-item fw-bolder border-white'>Categoría: <span className='text-muted'>{ detalle.categoria }</span></li>
          <li className='list-group-item fw-bolder border-white'>Tipo: <span className='text-muted'>{ detalle.tipo }</span></li>
          <li className='list-group-item fw-bolder border-white'>Código Inmueble: <span className='text-muted'>{ id }</span></li>
          <li className='list-group-item fw-bolder border-white'>Estado: <span className='text-muted'>{ detalle.estado }</span></li>
        </ul>
        <h5 className='mt-3'>Valor</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item fw-bolder'><span className='text-dark'>{ formatterPeso.format(detalle.valor) }</span> <span className='text-muted'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</span></li>
        </ul>
        <h5 className='mt-3'>Descripción</h5>
        <ul className='list-group list-group-horizontal-sm list-group-flush'>
          <li className='list-group-item fw-bolder'><span className='text-muted'>{ detalle.descripcion }</span></li>
        </ul>
        <h5 className='mt-3'>Características</h5>
        <ul className='list-group list-group-horizontal-sm'>
          <li className='list-group-item fw-bolder border-white'>Habitaciones: <span className='text-muted'>{ detalle.habitaciones }</span></li>
          <li className='list-group-item fw-bolder border-white'>Baños: <span className='text-muted'>{ detalle.baños }</span></li>
          <li className='list-group-item fw-bolder border-white'>Parqueadero: <span className='text-muted'>{ detalle.parqueaderos }</span></li>
        </ul>
        <h5 className='mt-3'>Localización</h5>
        <ul className='list-group list-group-horizontal-sm'>
          <li className='list-group-item fw-bolder border-white'>Zona/Barrio: <span className='text-muted'>{ detalle.sector }</span></li>
          <li className='list-group-item fw-bolder border-white'>Estrato: <span className='text-muted'>{ detalle.estrato }</span></li>
          <li className='list-group-item fw-bolder border-white'>Ciudad: <span className='text-muted'>{ detalle.ciudad }</span></li>
          <li className='list-group-item fw-bolder border-white'>Departamento: <span className='text-muted'>{ detalle.departamento }</span></li>
          <li className='list-group-item fw-bolder border-white'>País: <span className='text-muted'>{ detalle.pais }</span></li>
        </ul>
        <ul className='list-group list-group-horizontal-sm'>
           <li className='list-group-item fw-bolder border-white'>Ubicación: { detalle.ubicacion }</li>
        </ul>
        <br></br>
        <div className="d-grid gap-2 col mx-md-0">
          <button className='btn-inmueble btn btn-md btn-primary w-100 fw-bolder' onClick={ handleReturn }>
            Regresar
          </button>
        </div>
        <br></br>
      </div>
    </div>
  )
}
