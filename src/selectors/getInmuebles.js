export const getInmuebles = ( name = '',category,type,valueMin,valueMax,inmuebles,categorias,tipos ) => {
    name = name.toLowerCase();

    let categoriasValidas = [''];
    if( categorias.length !== 0 ){ for(let i in categorias) { categoriasValidas.push(categorias[i].categoria); } }

    let tiposValidos = [''];
    if( tipos.length !== 0 ){ for(let i in tipos) { tiposValidos.push(tipos[i].tipo); } }
    
    if( (name !== '' || valueMin !== '' || valueMax !== '') && category === '' && type === '' ) {
        return inmuebles.filter( inmueble => ( inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) ) )
    } else if( category !== '' && type === '' ) {
        if( category === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) );
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) )
        }
    } else if( type !== '' && category === '' ) {
        if( type === 'Todos' ){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) );
        } else {            
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) )
        }
    } else if( type !== '' && category !== '' ) {
        if( category === 'Todos' && type !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) )
        } else if( type === 'Todos' && category !== 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) )
        } else if( category === 'Todos' && type === 'Todos'){
            return inmuebles.filter( inmueble => inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) );
        } else {
            return inmuebles.filter( inmueble => inmueble.detalle.categoria === category && inmueble.detalle.tipo === type && inmueble.detalle.nombre.toLowerCase().includes(name) && (valueMin ? valueMin <= parseInt(inmueble.detalle.valor) : true) && (valueMax ? parseInt(inmueble.detalle.valor) <= valueMax : true) )
        }
    } 
    else {
        return [];
    }
}