import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const ApartamentosScreen = () => {
  return (
    <div>
        <center><h1 className='text-shadow'>Apartamentos</h1></center>
        <hr />
        <InmuebleList categoria={'Apartamento'} />
    </div>
  )
}
