import { InmuebleList } from '../inmueble/InmuebleList';

export const ApartamentosScreen = ({ inmuebles }) => {
  const apartamentos = inmuebles.filter(inmuebles => inmuebles.detalle.categoria === 'Apartamento' );
  return (
    <div>
      <hr />
      <center><h5>Apartamentos</h5></center>
      <hr />
      <InmuebleList inmuebles={apartamentos} />
    </div>
  )
}
