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

export const InmuebleCard = ({         
    id,
    nombre, 
    categoria, 
    tipo,
    habitaciones,
    baños,
    parqueaderos,
    area,
    valor
 }) => {


  return (
    <div className='col'>
        <Link to={`/${id}`} >
            <div className='card shadow'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={ inmuebleImages(`./${id}.jpg`) }  className='card-img' alt={ nombre } />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h6 className='card-title'>{ nombre }</h6>
                            <i className='text-muted'>{ categoria }&nbsp;{ tipo }</i>
                            <div className='text-muted lh-lg'>
                                <span className='text-muted'>{ valor }</span>
                            </div>
                            <div className='card-text lh-base'>
                                <span className='text-muted'><FcAreaChart className='iconCard' />&nbsp;{ area } m<sup>2</sup></span>
                            </div>                            
                            <div className='card-text lh-lg'>
                                {/* <span className='text-muted'><FaBed className='iconCard' />&nbsp;{ habitaciones }</span> */}
                                <span className='text-muted'><FaBed className='iconCard' />&nbsp;{ habitaciones }</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className='text-muted'><FaBath className='iconCard' />&nbsp;{ baños }</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className='text-muted'><IoCarSportSharp className='iconCard' />&nbsp;{ parqueaderos }</span>
                                {/* &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><IoEyeOutline className='iconCard' /></small> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>

  )
}
