import React from 'react'
import { Link } from 'react-router-dom'

import { PiToilet } from "react-icons/pi";
import { IoHomeOutline, IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { inmuebleImages } from '../../helpers/inmuebleImages';

export const InmuebleCard = ({         
    id,
    nombre, 
    categoria, 
    tipo,
    habitaciones,
    baños,
    parqueaderos,
    area,
    valor,
    name
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
                            <div className='text-muted lh-lg'>{ valor }</div>
                            <div className='card-text'>
                                <small className='text-muted'><IoHomeOutline />&nbsp;{ area } m<sup>2</sup></small>
                            </div>                            
                            <div className='card-text'>
                                <small className='text-muted'><IoBedOutline />&nbsp;{ habitaciones }</small>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><PiToilet />&nbsp;{ baños }</small>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><IoCarSportOutline />&nbsp;{ parqueaderos }</small>
                                {/* &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><IoEyeOutline /></small> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>

  )
}
