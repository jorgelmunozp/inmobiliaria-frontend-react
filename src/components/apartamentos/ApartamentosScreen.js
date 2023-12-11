import React from 'react';
import { InmuebleList } from '../inmueble/InmuebleList';

export const ApartamentosScreen = ({ inmuebles }) => {

  let apartamentos = [];
  for (const [i] of inmuebles.entries()) {
    if(inmuebles[i].detalle.categoria === 'Apartamento') {
      apartamentos.push(inmuebles[i]);
    }
  }

  return (
    <div>
      <hr />
      <center><h5>Apartamentos</h5></center>
      <hr />
      <InmuebleList inmuebles={apartamentos} />
    </div>
  )
}
