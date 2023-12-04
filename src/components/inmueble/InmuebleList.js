import { InmuebleCard } from './InmuebleCard';

export const InmuebleList = ({ inmuebles }) => {

  return (
    <div className='row row-cols-1 row-cols-md-3 g-1 animate__animated animate__fadeIn'>
      { 
        inmuebles.map( inmueble => (
          <InmuebleCard key={ inmueble.id } { ...inmueble } />
        ))
      }
    </div>
  )
}
