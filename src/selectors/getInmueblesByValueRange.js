export const getInmueblesByValueRange = ( min,max,inmuebles ) => {
    return inmuebles.filter( inmueble => ( min <= inmueble.detalle.valor && inmueble.detalle.valor <= max ) )
}