import { Link } from 'react-router-dom'
import { formatterPeso } from '../../../helpers/formatterPeso';

import { Car } from '../../icons/car/Car';
import { Bed } from '../../icons/bed/Bed';
import { Bath } from '../../icons/bath/Bath';
import { Area } from '../../icons/area/Area';

export const InmuebleCard = ({ id,detalle,urlBaseFrontend }) => {
    const iconSize = 1.5;
    const linkInmueble = '/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '/';
    
    return (
        <div className='col'>
            <Link to={ '/' + urlBaseFrontend + linkInmueble } >
                <div className='card shadow'>
                    <div className='row no-gutters'>
                        <div>
                            <div>
                                <img src={ detalle.imagen.data } className='card-img' alt={ detalle.nombre } />
                                <h6 className={ detalle.estado === 'Disponible' ? 'badge text-white bg-dark-transparent-color bg-gradient position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Vendido' ? 'badge text-white bg-red-transparent-color position-absolute top-0 end-0 fw-bolder' : ( detalle.estado === 'Arrendado' ? 'badge text-white bg-yellow-transparent-color position-absolute top-0 end-0 fw-bolder' : '') ) }><small>{ detalle.estado }</small></h6>
                                <div className='badge bg-dark-transparent-color bg-gradient text-center text-white fw-bolder position-absolute end-0 bottom-0 w-100 h-35'>
                                    <h6 className='badge text-white fw-bolder position-absolute start-0'>{ detalle.categoria }</h6>
                                    <h6 className='badge text-white fw-bolder position-absolute end-0'>{ detalle.tipo }</h6>
                                    
                                    <div className='card-body px-3 pt-0 pb-2'>
                                        <h6 className='card-title text-white text-truncate mt-2 pt-2'>{ detalle.nombre }</h6>
                                        <h6 className='text-white fw-bolder text-truncate mb-0'>{ formatterPeso.format(detalle.valor) }&nbsp;<small className='badge text-white ps-1'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</small></h6>
                                    </div>

                                    <div className='position-absolute bottom-0 mb-1 w-100 pe-3'>
                                        <div className='card-text container-fluid px-0'>
                                            <ul className='list-group list-group-horizontal justify-content-between'>
                                                <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Area strokeWidth={0.75} width={iconSize + 0.45} height={iconSize + 0.45} className={'text-white'} /> <span className='text-white fw-bolder ps-1'>{ detalle.area }&nbsp;<small>m<sup>2</sup></small></span></li>
                                                <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Bed strokeWidth={40} width={iconSize + 0.25} height={iconSize + 0.25} className={'text-white'} /> <span className='text-white fw-bolder ps-1'>{ detalle.habitaciones }</span></li>
                                                <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Bath strokeWidth={0.5} width={iconSize + 0.1} height={iconSize + 0.25} className={'text-white'} /> <span className='text-white fw-bolder ps-1'>{ detalle.baños }</span></li>
                                                <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Car strokeWidth={40} width={iconSize + 0.25} height={iconSize + 0.25} className={'text-white'} /> <span className='text-white fw-bolder ps-1'> { detalle.parqueaderos }</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='card-body px-3 pt-0 pb-2'>
                                <h6 className='card-title text-truncate mt-1 pt-1'>{ detalle.nombre }</h6>
                                <h6 className='text-dark fw-bolder text-truncate mb-0'>{ formatterPeso.format(detalle.valor) }&nbsp;<small className='badge text-muted ps-1'>{detalle.tipo === 'Arriendo' ? 'mensual' : ''}</small></h6>
                            </div> */}

                            {/* <div class="card-footer text-body-secondary py-2">
                                <div className='card-text lh-base'>
                                    <ul className='list-group list-group-horizontal justify-content-between'>
                                        <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Area strokeWidth={0.75} width={1.45} height={1.45} /> <span className='text-muted fw-bolder ps-1'>{ detalle.area }&nbsp;<small>m<sup>2</sup></small></span></li>
                                        <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Bed strokeWidth={44} width={1.25} height={1.25} /> <span className='text-muted fw-bolder ps-1'>{ detalle.habitaciones }</span></li>
                                        <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Bath strokeWidth={0.5} width={1.1} height={1.25} /> <span className='text-muted fw-bolder ps-1'>{ detalle.baños }</span></li>
                                        <li className='list-group-item badge bg-transparent fw-bolder border-0 text-center p-0'><Car strokeWidth={44} width={1.25} height={1.25} /> <span className='text-muted fw-bolder ps-1'> { detalle.parqueaderos }</span></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}