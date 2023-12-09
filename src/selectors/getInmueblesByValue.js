export const getInmueblesByValue = ( valor,inmuebles ) => {
    return inmuebles.filter( inmueble => inmueble.detalle.valor === valor )
}