import React from 'react'
import { InmuebleList } from '../inmueble/InmuebleList'

export const CasasScreen = ({ inmuebles }) => {
  
  let casas = [];
  for (const [i] of inmuebles.entries()) {
    if(inmuebles[i].detalle.categoria === 'Casa') {
      casas.push(inmuebles[i]);
    }
  }

  return (
    <div>
      <hr />
      <center><h4>Casas</h4></center>
      <hr />
      <InmuebleList inmuebles={casas} />
    </div>
  )
}

