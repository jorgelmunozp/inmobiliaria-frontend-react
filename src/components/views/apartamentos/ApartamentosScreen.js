import { Suspense, lazy } from 'react';
const InmuebleList = lazy(() => import('../inmueble/InmuebleList'));

export const ApartamentosScreen = ({ inmuebles }) => {
  const apartamentos = inmuebles.filter(inmueble => inmueble.detalle.categoria.toLowerCase() === 'apartamento' && inmueble.detalle.estado.toLowerCase().includes('disponible') );
  return (
    <div className='px-4'>
      <h5 className='my-3 my-lg-4 my-md-4 my-sm-5'><center>Apartamentos</center></h5>
      <Suspense fallback={<center><div className="loader"></div></center>}><InmuebleList inmuebles={apartamentos} /></Suspense>
    </div>
  )
}
