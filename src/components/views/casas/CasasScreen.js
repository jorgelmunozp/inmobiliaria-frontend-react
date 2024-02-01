import { InmuebleList } from '../inmueble/InmuebleList';

export const CasasScreen = ({ inmuebles }) => {
  const casas = inmuebles.filter(inmueble => inmueble.detalle.categoria.toLowerCase() === 'casa' && inmueble.detalle.estado.toLowerCase().includes('disponible') );
  return (
    <div className='px-4'>
      <h5 className='my-3 my-lg-4 my-md-4 my-sm-5'><center>Casas</center></h5>
      <InmuebleList inmuebles={casas} />
    </div>
  )
}

