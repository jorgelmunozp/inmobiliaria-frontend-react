import React from 'react'
import { Button } from './Button';
import { fetchCreate } from '../../../helpers/fetchCreate';

export const ButtonFetch = ({ color,icon,title,urlApi,contenidoApi,setResponseStatus,createFlag,className }) => {
  return (
    <Button icon={icon} title={title} type={1} className={className + ' py-4 w-100'} 
            onClick={ () => fetchCreate(urlApi,contenidoApi,setResponseStatus,createFlag) } />

  )
}
