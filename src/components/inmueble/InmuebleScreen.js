import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate} from 'react-router-dom'
import { getInmuebleById } from '../../selectors/getInmuebleById';

export const InmuebleScreen = ({ inmuebles }) => {

  const { inmuebleId } = useParams();
  const inmueble = useMemo( () => getInmuebleById(inmuebleId,inmuebles),[ inmuebleId,inmuebles ] );

  const navigate = useNavigate();
  const handleReturn = () => { navigate( -1 ); }
  if(!inmueble) { return <Navigate to='/' /> };

  const { id,detalle } = inmueble;
  
  const urlBaseBackend = process.env.REACT_APP_URL_BASE_BACKEND;
  const namePicInmueble = urlBaseBackend + '/assets/inmuebles/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '.jpg';

  return (
    <div className='row mt-5'>

      {/* <!-- Carousel --> */}
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-item active">
            <img src="https://jorgelmunozp.github.io/inmobiliaria-backend-node/assets/inmuebles/3-apartamento-terrazas-del-campestre.jpg" alt="Los Angeles" className="img-inmueble d-block shadow img-thumbnail animate__animated animate__fadeIn" />
          </div>
          <div className="carousel-item">
            <img src="https://jorgelmunozp.github.io/inmobiliaria-backend-node/assets/inmuebles/3-apartamento-terrazas-del-campestre.jpg" alt="Chicago" className="img-inmueble d-block shadow img-thumbnail animate__animated animate__fadeIn" />
          </div>
          <div className="carousel-item">
            <img src="https://jorgelmunozp.github.io/inmobiliaria-backend-node/assets/inmuebles/3-apartamento-terrazas-del-campestre.jpg" alt="New York" className="img-inmueble d-block shadow img-thumbnail animate__animated animate__fadeIn" />
          </div>
        </div>
        {/* <!-- Left and right controls/icons --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        <div className="carousel-indicators">     {/* <!-- Indicators/dots --> */}
            <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
        </div>
      </div>
      <p></p>
      {/* <div className='col-8 animate__animated animate__fadeIn'> */}
      <div className='animate__animated animate__fadeIn'>
        <h1>{ detalle.nombre }</h1>
        <hr></hr>
        <ul className='list-group list-group-horizontal-sm'>
          <li className='list-group-item fw-bolder border-white'>Categoría: <span className='text-muted'>{ detalle.categoria }</span></li>
          <li className='list-group-item fw-bolder border-white'>Tipo: <span className='text-muted'>{ detalle.tipo }</span></li>
          <li className='list-group-item fw-bolder border-white'>Código Inmueble: <span className='text-muted'>{ id }</span></li>
        </ul>
        <h5 className='mt-3'>Valor</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item fw-bolder'><span className='text-dark'>{ detalle.valor }</span> <span className='text-muted'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</span></li>
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
          <li className='list-group-item fw-bolder border-white'>Ciudad: <span className='text-muted'>{ detalle.ciudad }</span></li>
          <li className='list-group-item fw-bolder border-white'>Zona/Barrio: <span className='text-muted'>{ detalle.sector }</span></li>
          <li className='list-group-item fw-bolder border-white'>Estrato: <span className='text-muted'>{ detalle.estrato }</span></li>
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
