import { lazy } from 'react';
// import { fetchCreate } from '../../../helpers/fetchCreate';
import Swal from 'sweetalert2';
import { myColor } from '../../../global.js';
const fetchCreate = lazy(() => import('../../../helpers/fetchCreate.js'));
const Button = lazy(() => import('./Button.js'));

export const ButtonFetch = ({ color,icon,title,urlApi,contenidoApi,setResponseStatus,createFlag,className }) => {
  return (
    <Button icon={icon} title={title} type={1} className={className + ' py-4 w-100'} 
            onClick={ () => { createFlag 
                                ? fetchCreate(urlApi,contenidoApi,setResponseStatus,createFlag)
                                : Swal.fire({
                                  title: "Aún no",
                                  text: "Debes completar primero todos los campos",
                                  icon: "warning",
                                  confirmButtonColor: myColor,
                                })
          
          } } />
  )
}
export default ButtonFetch;