import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate} from 'react-router-dom'
import { inmuebleImages } from '../../helpers/inmuebleImages';
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
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
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
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

      {/* <div className='col-4'>
        <img src={ namePicInmueble } alt={ detalle.nombre } className='shadow img-thumbnail animate__animated animate__fadeIn' />
      </div> */}

      {/* <div className='col-8 animate__animated animate__fadeIn'> */}
      <div className='animate__animated animate__fadeIn'>
        <h1>{ detalle.nombre }</h1>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Categoría:</b> { detalle.categoria }</li>
          <li className='list-group-item'> <b>Tipo:</b> { detalle.tipo }</li>
          <li className='list-group-item'><b>Código: </b>{ id }</li>
        </ul>
        <h5 className='mt-3'>Valor</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><p>{ detalle.valor }</p></li>
        </ul>
        <h5 className='mt-3'>Descripción</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><p>{ detalle.descripcion }</p></li>
        </ul>
        <h5 className='mt-3'>Características</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Habitaciones:</b> { detalle.habitaciones }</li>
          <li className='list-group-item'><b>Baños:</b> { detalle.baños }</li>
          <li className='list-group-item'><b>Parqueadero:</b> { detalle.parqueaderos }</li>
        </ul>
        <h5 className='mt-3'>Localización</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Ciudad:</b> { detalle.ciudad }</li>
          <li className='list-group-item'><b>Ubicación:</b>{ detalle.ubicacion }</li>
        </ul>
        <br></br>
        <div className="d-grid gap-2 col mx-md-0">
          <button className='btn-inmueble btn btn-md btn-primary w-100' onClick={ handleReturn }>
            Regresar
          </button>
        </div>
        <br></br>
      </div>
    </div>
  )
}
