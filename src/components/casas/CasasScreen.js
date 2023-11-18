import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const CasasScreen = () => {
  return (
    <div>
      <hr />
      <center><h3>Casas</h3></center>
      <hr />
      <InmuebleList categoria={'Casa'} />
    </div>
  )
}

