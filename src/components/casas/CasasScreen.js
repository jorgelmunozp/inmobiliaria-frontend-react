import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const CasasScreen = () => {
  return (
    <div>
      <hr />
      <center><h4>Casas</h4></center>
      <hr />
      <InmuebleList categoria={'Casa'} />
    </div>
  )
}

