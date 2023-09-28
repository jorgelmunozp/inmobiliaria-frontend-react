import React from 'react'
import { Link } from 'react-router-dom'

import { FaBed,FaToilet,FaCarAlt,FaEye } from 'react-icons/fa';
import { heroImages } from '../../helpers/heroImages';

export const InmuebleCard = ({         
    id,
    nombre, 
    categoria, 
    tipo,
    habitaciones,
    baños,
    parqueaderos,
    valor
 }) => {


  return (
    <div className='col'>
        <div className='card shadow'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <Link to={`/inmueble/${id}`} >
                        <img src={ heroImages(`./${id}.jpg`) }  className='card-img' alt={ nombre } />
                    </Link>
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <Link to={`/inmueble/${id}`} >
                            <h6 className='card-title'>{ nombre }</h6>
                        </Link>
                        <i className='card-text'>{ categoria }&nbsp;{ tipo }</i>
                        <p className='text-muted'>{ valor }</p>
                        <p className='card-text'>
                            <small className='text-muted'><FaBed />&nbsp;{ habitaciones }</small>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <small className='text-muted'><FaToilet />&nbsp;{ baños }</small>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <small className='text-muted'><FaCarAlt />&nbsp;{ parqueaderos }</small>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={`/inmueble/${id}`} >
                                <FaEye />
                            </Link>
                        </p>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
