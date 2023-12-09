export const getInmuebles = ( name = '',category,type,valueMin,valueMax,inmuebles,categorias,tipos ) => {

    console.log("min,max: ",valueMin,valueMax)
    // if ( name.length === 0 ) { return []; }
    name = name.toLowerCase();

    let categoriasValidas = [''];
    if( categorias.length !== 0 ){ for(let i in categorias) { categoriasValidas.push(categorias[i].categoria); } }

    let tiposValidos = [''];
    if( tipos.length !== 0 ){ for(let i in tipos) { tiposValidos.push(tipos[i].tipo); } }
    
    if( name !== '' && category === '' && type === '' ) {
        return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
    } else if( category !== '' && type === '' ) {
        if( category === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else if( type !== '' && category === ''  ) {
        if( type === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {            
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else if( type !== '' && category !== '' ) {
        if( category === 'Todos' && type !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) )
        } else if( type === 'Todos' && category !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.nombre.toLowerCase().includes(name) )
        } else if( category === 'Todos' && type === 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name));
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) )
        }
    } else {
        return [];
    }
}