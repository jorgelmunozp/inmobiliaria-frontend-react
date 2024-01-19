import React from 'react'
import { Button } from './Button';
import { fetchCreate } from '../../../helpers/fetchCreate';

export const ButtonFetch = ({ color,icon,title,urlApi,contenidoApi,setResponseStatus,createFlag }) => {
  return (
    // <Button className="button" size="large" variant="contained"
    //     onClick={ () => fetchCreate(urlApi,contenidoApi,setResponseStatus,createFlag) }
    //     endIcon={ endIcon }
    // >
    //     { titulo }{" "}
    // </Button>
    <Button icon={icon} title={title} type={1} className={' py-4 w-100'} 
            onClick={ () => fetchCreate(urlApi,contenidoApi,setResponseStatus,createFlag) } />

  )
}
