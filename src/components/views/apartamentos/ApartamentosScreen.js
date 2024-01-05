import { InmuebleList } from '../inmueble/InmuebleList';

export const ApartamentosScreen = ({ inmuebles }) => {
  const apartamentos = inmuebles.filter(inmueble => inmueble.detalle.categoria.toLowerCase() === 'apartamento' && inmueble.detalle.estado.toLowerCase().includes('disponible') );
  return (
    <div>
      <hr />
      <center><h5>Apartamentos</h5></center>
      <hr />
      <InmuebleList inmuebles={apartamentos} />
    </div>
  )
}
