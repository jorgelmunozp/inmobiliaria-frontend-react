import React from 'react'
import { Link } from 'react-router-dom'
import { formatterPeso } from '../../helpers/formatterPeso';

import { Car } from '../icons/car/Car';
import { Bed } from '../icons/bed/Bed';
import { Bath } from '../icons/bath/Bath';
import { Area } from '../icons/area/Area';

export const InmuebleCard = ({ id,detalle }) => {
    const urlBaseBackend = process.env.REACT_APP_URL_BASE_BACKEND;
    const namePicInmueble = urlBaseBackend + '/assets/inmuebles/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '.jpg';
    const linkInmueble = '/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '/';

    return (
        <div className='col'>
            <Link to={ linkInmueble } >
                <div className='card shadow'>
                    <div className='row no-gutters'>
                        <div className=''>
                            <img src={ namePicInmueble }  className='card-img' alt={ detalle.nombre } />
                            <div className='card-body'>
                                <small className='text-muted fw-bolder'>{ detalle.categoria }</small>
                                <h5 className='card-title'>{ detalle.nombre }</h5>
                                <h6 className='text-dark fw-bolder'>{ formatterPeso.format(detalle.valor) }&nbsp;<small className='text-muted'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</small></h6>
                                <h6 className='text-white badge background-main-color position-absolute top-50 end-0 fw-bolder mt-5'><small>{ detalle.tipo }</small></h6>
                                <h6 className={ detalle.estado === 'Disponible' ? 'text-white badge bg-success position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Vendido' ? 'text-white badge bg-danger position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Arrendado' ? 'text-white badge bg-warning position-absolute top-0 end-0 fw-bolder' : '') ) }><small>{ detalle.estado }</small></h6>
                                <div className='card-text lh-base'>
                                    <table>
                                        <tbody>
                                            <tr className=''>
                                                <td><Area /></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.area }&nbsp;<small>m<sup>2</sup></small></span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><Bed /></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.habitaciones }</span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><Bath /></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.baños }</span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><Car /></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'> { detalle.parqueaderos }</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
