export const getInmueblesByValue = ( value,inmuebles ) => {
    return inmuebles.filter( inmueble => inmueble.detalle.valor === value )
}