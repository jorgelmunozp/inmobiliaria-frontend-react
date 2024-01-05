import { InmuebleList } from '../inmueble/InmuebleList';

export const CasasScreen = ({ inmuebles }) => {
  const casas = inmuebles.filter(inmuebles => inmuebles.detalle.categoria === 'Casa' );
  return (
    <div>
      <hr />
      <center><h5>Casas</h5></center>
      <hr />
      <InmuebleList inmuebles={casas} />
    </div>
  )
}

