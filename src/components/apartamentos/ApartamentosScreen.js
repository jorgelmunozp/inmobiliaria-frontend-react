import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const ApartamentosScreen = ({name}) => {
  return (
    <div>
        <hr />
        <center><h4>Apartamentos</h4></center>
        <hr />
        <InmuebleList categoria={'Apartamento'} name={name} />
    </div>
  )
}
