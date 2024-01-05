import React from 'react'
import { Link } from 'react-router-dom'
import { formatterPeso } from '../../../helpers/formatterPeso';

import { Car } from '../../icons/car/Car';
import { Bed } from '../../icons/bed/Bed';
import { Bath } from '../../icons/bath/Bath';
import { Area } from '../../icons/area/Area';

export const InmuebleCard = ({ id,detalle,urlBaseBackend,urlBaseFrontend }) => {
    const namePicInmueble = urlBaseBackend + '/assets/inmuebles/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '-0.jpg';
    const linkInmueble = '/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '/';
    
    return (
        <div className='col'>
            <Link to={ '/' + urlBaseFrontend + linkInmueble } >
                <div className='card shadow'>
                    <div className='row no-gutters'>
                        <div>
                            <img src={ namePicInmueble }  className='card-img' alt={ detalle.nombre } />
                            <div className='card-body px-3'>
                                <small className='text-muted fw-bolder'>{ detalle.categoria }</small>
                                <h6 className='card-title text-truncate'>{ detalle.nombre }</h6>
                                <h6 className='text-dark fw-bolder'>{ formatterPeso.format(detalle.valor) }&nbsp;<small className='text-muted'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</small></h6>
                                <h6 className='text-white badge background-main-color position-absolute top-50 end-0 fw-bolder mt-5'><small>{ detalle.tipo }</small></h6>
                                <h6 className={ detalle.estado === 'Disponible' ? 'text-white badge bg-success position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Vendido' ? 'text-white badge bg-danger position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Arrendado' ? 'text-white badge bg-warning position-absolute top-0 end-0 fw-bolder' : '') ) }><small>{ detalle.estado }</small></h6>
                                <div className='card-text lh-base'>
                                    <ul className='list-group list-group-horizontal justify-content-between'>
                                        <li className='list-group-item fw-bolder border-white text-center p-0'><Area strokeWidth={1} width={1.65} height={1.65} /> <span className='text-muted fw-bolder px-1'>{ detalle.area }&nbsp;<small>m<sup>2</sup></small></span></li>
                                        <li className='list-group-item fw-bolder border-white text-center p-0'><Bed strokeWidth={48} width={1.5} height={1.5} /> <span className='text-muted fw-bolder px-1'>{ detalle.habitaciones }</span></li>
                                        <li className='list-group-item fw-bolder border-white text-center p-0'><Bath strokeWidth={0.75} width={1.3} height={1.5} /> <span className='text-muted fw-bolder px-1'>{ detalle.baños }</span></li>
                                        <li className='list-group-item fw-bolder border-white text-center p-0'><Car strokeWidth={48} width={1.5} height={1.5} /> <span className='text-muted fw-bolder px-1'> { detalle.parqueaderos }</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}