export const getInmueblesByCategoria = ( categoria,inmuebles ) => {
    
    const InmueblesValidos = ['Apartamento','Casa'];

    if( !InmueblesValidos.includes( categoria )){
        throw new Error( `${ categoria } no es un categoria de inmueble válido` );
    }

    return inmuebles.filter( inmueble => inmueble.detalle.categoria === categoria )
}