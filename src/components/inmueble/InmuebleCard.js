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

export const InmuebleCard = ({ id,detalle }) => {
    const namePicInmueble = 'http://localhost:3000/assets/inmuebles/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '.jpg';
    const linkInmueble = '/' + id + '-' + detalle.categoria.toLowerCase() + '-' + detalle.nombre.split(' ').join('-').toLowerCase() + '/';

    return (
        <div className='col'>
            <Link to={ linkInmueble } >
                <div className='card shadow'>
                    <div className='row no-gutters'>
                        <div className=''>
                            {/* <img src={ namePicInmueble }  className='card-img' alt={ detalle.nombre } /> */}
                            <img src={ namePicInmueble } className='card-img border-bottom border-secondary border-3' alt={ detalle.nombre } />
                            <div className='card-body'>
                                <small className='text-muted'>{ detalle.categoria }</small>
                                <h5 className='card-title'>{ detalle.nombre }</h5>
                                <h6 className='text-muted fw-bolder'>{ detalle.valor }&nbsp;</h6>
                                <h6 className='text-white badge background-main-color'><small>{ detalle.tipo }</small></h6>
                                <div className='card-text lh-base'>
                                    <table>
                                        <tbody>
                                            <tr className=''>
                                                <td><span className=''><SlShareAlt className='iconCard' /></span></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.area }&nbsp;<small>m<sup>2</sup></small></span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><span className=''><IoBedOutline className='iconCard' /></span></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.habitaciones }</span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><span className=''><PiToilet className='iconCard' /></span></td>
                                                <td>&nbsp;</td>
                                                <td><span className='text-muted fw-bolder'>{ detalle.baños }</span></td>
                                                <td>&nbsp;&nbsp;</td>
                                                <td><span className=''><IoCarSportOutline className='iconCard' /></span></td>
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
