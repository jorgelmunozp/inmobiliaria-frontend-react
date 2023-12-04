import React from 'react'
import { Link } from 'react-router-dom'

import { PiToilet } from "react-icons/pi";
import { IoHomeOutline, IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { inmuebleImages } from '../../helpers/inmuebleImages';

import { IoBed,IoCarSportSharp } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { MdBedroomChild,MdBathroom } from "react-icons/md";
import { FaBed,FaBath } from "react-icons/fa6";

export const InmuebleCard = ({ id,detalle }) => {
    const namePicInmueble = 'http://localhost:3000/assets/inmuebles/' + id + '-' + detalle.categoria + '-' + detalle.nombre.split(' ').join('-') + '.jpg';
    const linkInmueble = '/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '/';

    return (
        <div className='col'>
            <Link to={ linkInmueble } >
                <div className='card shadow'>
                    <div className='row no-gutters'>
                        <div className='col-4'>
                            <img src={ namePicInmueble }  className='card-img' alt={ detalle.nombre } />
                        </div>
                        <div className='col-8'>
                            <div className='card-body'>
                                <h6 className='card-title'>{ detalle.nombre }</h6>
                                <i className='text-muted'>{ detalle.categoria }&nbsp;{ detalle.tipo }</i>
                                <div className='text-muted lh-lg'>
                                    <span className='text-muted'>{ detalle.valor }</span>
                                </div>
                                <div className='card-text lh-base'>
                                    <span className='text-muted'><FcAreaChart className='iconCard' />&nbsp;{ detalle.area } m<sup>2</sup></span>
                                </div>                            
                                <div className='card-text lh-lg'>
                                    <span className='text-muted'><FaBed className='iconCard' />&nbsp;{ detalle.habitaciones }</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className='text-muted'><FaBath className='iconCard' />&nbsp;{ detalle.baños }</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className='text-muted'><IoCarSportSharp className='iconCard' />&nbsp;{ detalle.parqueaderos }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
