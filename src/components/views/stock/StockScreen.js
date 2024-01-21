import React, { useMemo, useState } from 'react';
import { Area } from '../../icons/area/Area';
import { Bath } from '../../icons/bath/Bath';
import { Bed } from '../../icons/bed/Bed';
import { Camera } from '../../icons/camera/Camera';
import { Car } from '../../icons/car/Car';
import { Category } from '../../icons/category/Category';
import { HomeWarehouse } from '../../icons/home/HomeWarehouse';
import { Description } from '../../icons/description/Description';
import { Home } from '../../icons/home/Home';
import { HomeDollar } from '../../icons/home/HomeDollar';
import { LocationArrow } from '../../icons/location/LocationArrow'
import { MapLocation } from '../../icons/map/MapLocation';
import { MapPin } from '../../icons/map/MapPin';
import { Type } from '../../icons/type/Type';
import { HomeQuestion } from '../../icons/home/HomeQuestion';
import { Image } from '../../icons/image/Image';

import { fetchUpdate } from '../../../helpers/fetchUpdate';
import { InputText } from '../../forms/inputs/InputText';
import { getInmuebleById } from '../../../selectors/getInmuebleById';
import { getInmueblesByName} from '../../../selectors/getInmueblesByName';
import { PaginationBar } from '../../bars/pagination/PaginationBar';
import { Arrows } from '../../forms/arrows/Arrows';

export const StockScreen = ({ inmuebles,urlApiInmuebles }) => {
  const iconSize = 1.5;

  /* Query */
  const [ queryId , setQueryId ] = useState("");
  const [ queryName , setQueryName ] = useState("");
  let inmueblesFiltered = [];
  const inmueblesFilteredById = useMemo( () => getInmuebleById(queryId,inmuebles), [queryId,inmuebles] );
  const inmueblesFilteredByName = useMemo( () => getInmueblesByName(queryName,inmuebles), [queryName,inmuebles] );
  if ( queryId !== "" ) {inmueblesFiltered = [inmueblesFilteredById]; } 
  else if ( queryName !== "" ) { inmueblesFiltered = inmueblesFilteredByName; }

  /* Pagination */
  const [itemPerPage, setItemPerPage ] = useState(10);                 // Se define el número de items por página
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);       // Se calculan los indices de la paginación para el filtro Slice(x,y) que entrega un rango de los items de x a y
  const numPages = ((queryId === '' && queryName === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  const resPages = ((queryId === '' && queryName === '') ? inmuebles.length%itemPerPage : inmueblesFiltered.length%itemPerPage);                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  let indexPages = [];
  let activePage = [true];                                            // [true]
  if(resPages !== 0 ){
    for(let i = 0; i <= numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  } else if(resPages === 0 ){
    for(let i = 0; i < numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  }
  const [activePages, setActivePages] = useState(activePage);         // [true,false,false,false]
  
    // Convert image -> image base 64
    const [ image, setImage ] = useState('');
    const [imageData, setImageData] = useState({
      data: '',
      name: ''
    });
    const reader = new FileReader();
    if (image) { reader.readAsDataURL(image) }
    reader.onload = () => {
      setImageData({
        data: reader.result,
        name: category.toLocaleLowerCase() + "-" + name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-') + "-0." + image.name.split('.')[1]
      });
    };
    reader.onerror = (error) => { console.log('Error img -> img base 64: ', error); };
    
  /* Update Stock */
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ type, setType ] = useState("");
  const [ rooms, setRooms ] = useState("");
  const [ bathrooms, setBathooms ] = useState("");
  const [ garages , setGarages ] = useState("");
  const [ area, setArea ] = useState("");
  const [ value, setValue ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ city, setCity ] = useState(""); 
  const [ neighborhood, setNeighborhood ] = useState("");
  const [ stratum, setStratum ] = useState("");
  const [ status, setStatus ] = useState("");

  const handleChangeName = (event) => { setName(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); };
  const handleChangeCategory = (event) => { setCategory(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); };
  const handleChangeType = (event) => { setType(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeRooms = (event) => { setRooms(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeBathrooms = (event) => { setBathooms(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeGarage = (event) => { setGarages(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeArea = (event) => { setArea(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeValue = (event) => { setValue(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeDescription = (event) => { setDescription(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeCity = (event) => { setCity(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeNeighborhood = (event) => { setNeighborhood(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
  const handleChangeStratum = (event) => { setStratum(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value);}
  const handleChangeStatus = (event) => { setStatus(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value);}

  const handleStock = ( id,value ) => {
    const contenidoInmueble = `{
      "detalle": {
        "nombre": "${document.getElementById('name-' + id ).value}",
        "imagen": "1-casa-condominio-versalles-0.jpg",
        "categoria": "${document.getElementById('cat-' + id ).value}",
        "tipo": "${document.getElementById('type-' + id ).value}",
        "habitaciones": "${document.getElementById('room-' + id ).value}",
        "baños": "${document.getElementById('bath-' + id ).value}",
        "parqueaderos": "${document.getElementById('car-' + id ).value}",
        "area": "${document.getElementById('area-' + id ).value}",
        "valor": "${document.getElementById('val-' + id ).value}",
        "descripcion": "${document.getElementById('desc-' + id ).value}",
        "ciudad": "${document.getElementById('city-' + id ).value}",
        "sector": "${document.getElementById('zone-' + id ).value}",
        "estrato": "${document.getElementById('stra-' + id ).value}",
        "estado": "${document.getElementById('stat-' + id ).value}",
        "images": [
          "1-casa-condominio-versalles-1.jpg",
          "1-casa-condominio-versalles-2.jpg",
          "1-casa-condominio-versalles-3.jpg",
          "1-casa-condominio-versalles-4.jpg",
          "1-casa-condominio-versalles-5.jpg",
          "1-casa-condominio-versalles-6.jpg"
        ]
      },
      "id": ${id}
    }`;

    fetchUpdate(urlApiInmuebles,JSON.stringify(contenidoInmueble),id);
  };

  /* Sort */
  const [sortBy, setSortBy] = useState(0);
  function sortByIdUp(a, b) { return a.id - b.id; }
  function sortByIdDown(a, b) { return b.id - a.id; }
  function sortByNameUp(a, b) { return a.detalle.nombre.localeCompare(b.detalle.nombre); }
  function sortByNameDown(a, b) { return b.detalle.nombre.localeCompare(a.detalle.nombre); }
  function sortByCategoryUp(a, b) { return a.detalle.categoria.localeCompare(b.detalle.categoria); }
  function sortByCategoryDown(a, b) { return b.detalle.categoria.localeCompare(a.detalle.categoria); }
  function sortByTypeUp(a, b) { return a.detalle.tipo.localeCompare(b.detalle.tipo); }
  function sortByTypeDown(a, b) { return b.detalle.tipo.localeCompare(a.detalle.tipo); }
  function sortByRoomsUp(a, b) { return a.detalle.habitaciones.localeCompare(b.detalle.habitaciones); }
  function sortByRoomsDown(a, b) { return b.detalle.habitaciones.localeCompare(a.detalle.habitaciones); }
  function sortByBathroomsUp(a, b) { return a.detalle.baños.localeCompare(b.detalle.baños); }
  function sortByBathroomsDown(a, b) { return b.detalle.baños.localeCompare(a.detalle.baños); }
  function sortByGaragesUp(a, b) { return a.detalle.parqueaderos.localeCompare(b.detalle.parqueaderos); }
  function sortByGaragesDown(a, b) { return b.detalle.parqueaderos.localeCompare(a.detalle.parqueaderos); }
  function sortByAreaUp(a, b) { return a.detalle.area.localeCompare(b.detalle.area); }
  function sortByAreaDown(a, b) { return b.detalle.area.localeCompare(a.detalle.area); }
  function sortByValueUp(a, b) { return a.detalle.valor.localeCompare(b.detalle.valor); }
  function sortByValueDown(a, b) { return b.detalle.valor.localeCompare(a.detalle.valor); }
  function sortByDescriptionUp(a, b) { return a.detalle.descripcion.localeCompare(b.detalle.descripcion); }
  function sortByDescriptionDown(a, b) { return b.detalle.descripcion.localeCompare(a.detalle.descripcion); }
  function sortByCityUp(a, b) { return a.detalle.ciudad.localeCompare(b.detalle.ciudad); }
  function sortByCityDown(a, b) { return b.detalle.ciudad.localeCompare(a.detalle.ciudad); }
  function sortByNeighborhoodUp(a, b) { return a.detalle.sector.localeCompare(b.detalle.sector); }
  function sortByNeighborhoodDown(a, b) { return b.detalle.sector.localeCompare(a.detalle.sector); }
  function sortByStratumUp(a, b) { return a.detalle.estrato.localeCompare(b.detalle.estrato); }
  function sortByStratumDown(a, b) { return b.detalle.estrato.localeCompare(a.detalle.estrato); }
  function sortByStatusUp(a, b) { return a.detalle.estado.localeCompare(b.detalle.estado); }
  function sortByStatusDown(a, b) { return b.detalle.estado.localeCompare(a.detalle.estado); }
  
  return (
    <>
      <hr />
      <center><h5>Inventario Inmuebles</h5></center> 
      <hr />
      <p>
          <a className="form-control border border-muted text-center shadow-sm w-100" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
            🔎
          </a>
        </p>
        <div className="collapse mb-3" id="collapseContent">
          <div className="card card-body">
            <div className='row d-block d-sm-flex'>
              <div className='col'>
                <InputText id={'query-id'} placeholder={'Código Inmueble'} value={queryId} onInputChange={(target) => setQueryId(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
              </div>
              <div className='col'>
                <InputText id={'query-name'} placeholder={'Nombre Inmueble'} value={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
              </div>
            </div>
          </div>
        </div>
        
      <div className='stock overflow-scroll'>
        <div className='row flex-nowrap'>
          <span className='col-4 col-sm-2 border text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><HomeWarehouse strokeWidth={2} width={iconSize - 0.15} height={iconSize - 0.15}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(1)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(2)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-auto px-2 border border-light text-center bg-main-transparent-color align-self-center py-2'><Image strokeWidth={2} width={iconSize + 0.2} height={iconSize + 0.2}/></span>
          <span className='col-7 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Home strokeWidth={1} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(3)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(4)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Category strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(5)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(6)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Type strokeWidth={0} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(7)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(8)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Bed strokeWidth={40} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(9)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(10)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Bath strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(11)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(12)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Car strokeWidth={40} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(13)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(14)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Area strokeWidth={1} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(15)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(16)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><HomeDollar strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(17)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(18)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Description strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(19)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(20)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapLocation strokeWidth={2.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(21)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(22)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-6 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapPin strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(23)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(24)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-1 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><LocationArrow strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(25)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(26)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><HomeQuestion strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(27)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(28)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-12 col-sm-6 border border-light text-center bg-main-transparent-color align-self-center py-2'><Camera strokeWidth={40} width={iconSize + 0.1} height={iconSize + 0.1}/></span>
        </div>
        {
          ((queryId === '' && queryName === '') ? inmuebles : inmueblesFiltered).sort(
              sortBy === 1 ? sortByIdUp 
                : ( sortBy === 2 ? sortByIdDown 
                  : ( sortBy === 3 ? sortByNameUp 
                    : ( sortBy === 4 ? sortByNameDown 
                      : ( sortBy === 5 ? sortByCategoryUp 
                        : ( sortBy === 6 ? sortByCategoryDown 
                          : ( sortBy === 7 ? sortByTypeUp 
                            : ( sortBy === 8 ? sortByTypeDown 
                              : ( sortBy === 9 ? sortByRoomsUp 
                                : ( sortBy === 10 ? sortByRoomsDown 
                                  : ( sortBy === 11 ? sortByBathroomsUp 
                                    : ( sortBy === 12 ? sortByBathroomsDown 
                                      : ( sortBy === 13 ? sortByGaragesUp 
                                        : ( sortBy === 14 ? sortByGaragesDown
                                          : ( sortBy === 15 ? sortByAreaUp 
                                            : ( sortBy === 16 ? sortByAreaDown
                                              : ( sortBy === 17 ? sortByValueUp 
                                                : ( sortBy === 18 ? sortByValueDown
                                                  : ( sortBy === 19 ? sortByDescriptionUp 
                                                    : ( sortBy === 20 ? sortByDescriptionDown  
                                                      : ( sortBy === 21 ? sortByCityUp 
                                                        : ( sortBy === 22 ? sortByCityDown
                                                          : ( sortBy === 23 ? sortByNeighborhoodUp 
                                                            : ( sortBy === 24 ? sortByNeighborhoodDown 
                                                              : ( sortBy === 25 ? sortByStratumUp 
                                                                : ( sortBy === 26 ? sortByStratumDown
                                                                  : ( sortBy === 27 ? sortByStatusUp 
                                                                    : ( sortBy === 28 ? sortByStatusDown
                                                                      : sortByIdUp
            )))))))))))))))))))))))))))).slice(indexPage[0],indexPage[1]).map(inmueble => (
            <div className='row flex-nowrap' key={inmueble.id}>
              <span className='col-4 col-sm-2 py-1 border text-center'> { inmueble.id } </span>
              <div className='image-upload col-auto px-1 border text-center'>
                  <label htmlFor={'img' + inmueble.id }><img src={ inmueble.detalle.imagen.data } alt ="Subir foto" title ="Subir foto" /> </label>
                  <input type="file" id={'img' + inmueble.id } accept="image/*"/>
              </div>
              <input defaultValue={ inmueble.detalle.nombre } id={ 'name-' + inmueble.id } onChange={handleChangeName} type='text' autoComplete='off' className='col-7 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.categoria } id={ 'cat-' + inmueble.id } onChange={ handleChangeCategory } type='text' autoComplete='off' className='col-5 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.tipo } id={ 'type-' + inmueble.id } onChange={ handleChangeType } type='text' autoComplete='off' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.habitaciones } id={ 'room-' + inmueble.id } onChange={ handleChangeRooms } type='number' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.baños } id={ 'bath-' + inmueble.id } onChange={ handleChangeBathrooms} type='number' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.parqueaderos } id={ 'car-' + inmueble.id } onChange={ handleChangeGarage } type='number' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.area } id={ 'area-' + inmueble.id } onChange={ handleChangeArea } type='number' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.valor } id={ 'val-' + inmueble.id } onChange={ handleChangeValue } type='number' className='col-5 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.descripcion } id={ 'desc-' + inmueble.id } onChange={ handleChangeDescription } type='textarea' autoComplete='off' className='col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.ciudad } id={ 'city-' + inmueble.id } onChange={ handleChangeCity } type='text' autoComplete='off' className='col-5 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.sector } id={ 'zone-' + inmueble.id } onChange={ handleChangeNeighborhood } type='text' autoComplete='off' className='col-6 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estrato } id={ 'stra-' + inmueble.id } onChange={ handleChangeStratum } type='number' className='col-5 col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estado } id={ 'stat-' + inmueble.id } onChange={ handleChangeStatus } type='text' className='col-5 col-sm-2 py-1 border text-center' />
              {
                inmueble.detalle.images.map((image) => { return(
                  <div key={image} className='image-upload col-auto px-1 border text-center'>
                    <label htmlFor={'img' + inmueble.id }><img src={ image.data } alt ="Foto" title ="Foto" /> </label>
                    <input type="file" id={'img' + inmueble.id } accept="image/*" />
                  </div>
                )})
              }
              {/* <input type="file" id="picInmueble" accept="image/*" className='col-sm-1' multiple></input> */}
            </div>
          ))
        }
      </div>
      <PaginationBar query={queryId === '' && queryName === ''} array={inmuebles} arrayFiltered={inmueblesFiltered} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
    </>
  )
}