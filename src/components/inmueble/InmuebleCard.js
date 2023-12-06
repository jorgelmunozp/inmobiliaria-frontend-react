import React from 'react'
import { Link } from 'react-router-dom'

import { IoHomeOutline, IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { PiToilet } from "react-icons/pi";
import { SlShareAlt } from "react-icons/sl";
import { MdOutlineShower } from "react-icons/md";

import { BiBath } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";


import { IoBed,IoCarSportSharp } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { MdBedroomChild,MdBathroom } from "react-icons/md";
import { FaBed,FaBath } from "react-icons/fa6";

// import car from './car.svg';
// import bed from './bed.svg';
// import area from './area.svg';
// import bath from './bath.svg';
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
                                <h6 className='text-muted fw-bolder'>{ detalle.valor }&nbsp;</h6>
                                <h6 className='text-white badge background-main-color fw-bolder'><small>{ detalle.tipo }</small></h6>
                                <div className='card-text lh-base'>
                                    <table>
                                        <tbody>
                                            <tr className=''>
                                                <td><Area /></td>
                                                {/* <td><span className=''>⌂</span></td> */}
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.area }&nbsp;<small><b>m</b><sup style={{"font-size":"2px;"}}><b>2</b></sup></small></span></td>
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
                                    {/* <span className='text-muted fw-bolder'><SlShareAlt className='iconCard' />&nbsp;&nbsp;{ detalle.area } m<sup>2</sup></span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className='text-muted fw-bolder'><IoBedOutline className='iconCard' />&nbsp;&nbsp;{ detalle.habitaciones }</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className='text-muted fw-bolder'><PiToilet className='iconCard' />&nbsp;&nbsp;{ detalle.baños }</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className='text-muted fw-bolder'><IoCarSportOutline className='iconCard' />&nbsp;&nbsp;{ detalle.parqueaderos }</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
