import { InmuebleList } from '../inmueble/InmuebleList';

export const CasasScreen = ({ inmuebles }) => {
  const casas = inmuebles.filter(inmueble => inmueble.detalle.categoria.toLowerCase() === 'casa' && inmueble.detalle.estado.toLowerCase().includes('disponible') );
  return (
    <div>
      <hr />
      <center><h5>Casas</h5></center>
      <hr />
      <InmuebleList inmuebles={casas} />
    </div>
  )
}

