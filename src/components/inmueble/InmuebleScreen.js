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
  const namePicInmueble = urlBaseBackend + 'assets/inmuebles/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '.jpg';

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={ namePicInmueble } alt={ detalle.nombre } className='shadow img-thumbnail animate__animated animate__fadeIn' />
      </div>

      <div className='col-8 animate__animated animate__fadeIn'>
        <h1>{ detalle.nombre }</h1>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Categoría:</b> { detalle.categoria }</li>
          <li className='list-group-item'> <b>Tipo:</b> { detalle.tipo }</li>
          <li className='list-group-item'> <b>Habitaciones:</b> { detalle.habitaciones } 
                                           &nbsp;&nbsp;&nbsp;&nbsp;
                                           <b>Baños:</b> { detalle.baños } 
                                           &nbsp;&nbsp;&nbsp;&nbsp;
                                           <b>Parqueadero:</b> { detalle.parqueaderos }</li>
        </ul>

        <h5 className='mt-3'>Valor</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><p>{ detalle.valor }</p></li>
        </ul>
        <h5 className='mt-3'>Descripción</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><p>{ detalle.descripcion }</p></li>
        </ul>
        <h5 className='mt-3'>Localización</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Ciudad:</b> { detalle.ciudad }</li>
          <li className='list-group-item'><b>Ubicación:</b>{ detalle.ubicacion }</li>
          <li className='list-group-item'><b>Código: </b>{ id }</li>
        </ul>
        <br></br>
        <div className="d-grid gap-2 col-8 mx-md-0">
          <button className='btn-inmueble btn btn-md btn-primary w-100' onClick={ handleReturn }>
            Regresar
          </button>
        </div>
      </div>
    </div>
  )
}
