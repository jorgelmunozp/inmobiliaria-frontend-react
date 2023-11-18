import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const ApartamentosScreen = ({name}) => {
  return (
    <div>
        <hr />
        <center><h3>Apartamentos</h3></center>
        <hr />
        <InmuebleList categoria={'Apartamento'} name={name} />
    </div>
  )
}
