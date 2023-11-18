import React from 'react'
import { Link } from 'react-router-dom'

import { FaBed,FaToilet,FaCarAlt,FaEye } from 'react-icons/fa';
import { inmuebleImages } from '../../helpers/inmuebleImages';

export const InmuebleCard = ({         
    id,
    nombre, 
    categoria, 
    tipo,
    habitaciones,
    baños,
    parqueaderos,
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
                            <p className='text-muted lh-lg'>{ valor }</p>
                            <p className='card-text'>
                                <small className='text-muted'><FaBed />&nbsp;{ habitaciones }</small>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><FaToilet />&nbsp;{ baños }</small>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <small className='text-muted'><FaCarAlt />&nbsp;{ parqueaderos }</small>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <FaEye />
                            </p>

                            
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>

  )
}
