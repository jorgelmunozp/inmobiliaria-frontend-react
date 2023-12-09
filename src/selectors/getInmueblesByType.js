export const getInmueblesByType = ( tipo,inmuebles,tipos ) => {

    let tiposValidos = [''];
    if( tipos.length !== 0 ){
        for(let i in tipos) { tiposValidos.push(tipos[i].tipo); }
    }
    
    if( !tiposValidos.includes( tipo )){
        throw new Error( `${ tipo } no es un tipo de negocio válido` );
    }

    return inmuebles.filter( inmueble => inmueble.detalle.tipo === tipo )
}