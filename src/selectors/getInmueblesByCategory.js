export const getInmueblesByCategory = ( categoria,inmuebles,categorias ) => {

    let categoriasValidas = [''];
    if( categorias.length !== 0 ){
        for(let i in categorias) { categoriasValidas.push(categorias[i].categoria); }
    }

    if( !categoriasValidas.includes( categoria )){
        throw new Error( `${ categoria } no es un categoria de inmueble válido` );
    }

    return inmuebles.filter( inmueble => inmueble.detalle.categoria === categoria )
}