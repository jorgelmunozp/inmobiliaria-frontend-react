export const getInmuebles = ( name = '',categoria,tipo,inmuebles,categorias,tipos ) => {

    // if ( name.length === 0 ) { return []; }
    name = name.toLowerCase();

    let categoriasValidas = [''];
    if( categorias.length !== 0 ){ for(let i in categorias) { categoriasValidas.push(categorias[i].categoria); } }

    let tiposValidos = [''];
    if( tipos.length !== 0 ){ for(let i in tipos) { tiposValidos.push(tipos[i].tipo); } }
    
    if( name !== '' && categoria === '' && tipo === '' ) {
        return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
    } else if( categoria !== '' && tipo === '' ) {
        if( categoria === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === categoria && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else if( tipo !== '' && categoria === ''  ) {
        if( tipo === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {            
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === tipo && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else if( tipo !== '' && categoria !== '' ) {
        if( categoria === 'Todos' && tipo !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === tipo && inmueble.detalle.nombre.toLowerCase().includes(name) )
        } else if( tipo === 'Todos' && categoria !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === categoria && inmueble.detalle.nombre.toLowerCase().includes(name) )
        } else if( categoria === 'Todos' && tipo === 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === categoria && inmueble.detalle.tipo === tipo && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else {
        return [];
    }
}