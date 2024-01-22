import React from 'react'
import { Button } from './Button';
import { fetchCreate } from '../../../helpers/fetchCreate';
import Swal from 'sweetalert2';
import {  myColor } from '../../../global';

export const ButtonFetch = ({ color,icon,title,urlApi,contenidoApi,setResponseStatus,createFlag,className }) => {
  return (
    <Button icon={icon} title={title} type={1} className={className + ' py-4 w-100'} 
            onClick={ () => { createFlag 
                                ? fetchCreate(urlApi,contenidoApi,setResponseStatus,createFlag)
                                : Swal.fire({
                                  title: "Aún no",
                                  text: "Debes llenar primero todos los campos",
                                  icon: "warning",
                                  confirmButtonColor: myColor,
                                })
          
          } } />
  )
}