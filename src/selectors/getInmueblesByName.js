export const getInmueblesByName = ( name = '',inmuebles ) => {
    if ( name.length === 0 ) { return []; }

    name = name.toLowerCase();

    return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
}