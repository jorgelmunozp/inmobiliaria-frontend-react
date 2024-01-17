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

import { fetchUpdate } from '../../../helpers/fetchUpdate';
import { InputText } from '../../forms/inputs/InputText';
import { getInmuebleById } from '../../../selectors/getInmuebleById';
import { getInmueblesByName} from '../../../selectors/getInmueblesByName';
import { PaginationBar } from '../../pagination/PaginationBar';
import { Arrows } from '../../forms/arrows/Arrows';

export const StockScreen = ({ inmuebles,urlApiInmuebles }) => {
  const urlBaseBackend = process.env.REACT_APP_URL_BASE_BACKEND;
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
  
  /* Update Stock */
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ type, setType ] = useState("");
  const [ rooms, setRooms ] = useState("");
  const [ bathrooms, setBathooms ] = useState("");
  const [ garage , setGarage ] = useState("");
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
  const handleChangeGarage = (event) => { setGarage(event.target.value); handleStock(event.target.id.split('-')[1],event.target.value); }
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
  function sortByNameUp(a, b) { return a.inmueble.nombre.localeCompare(b.inmueble.nombre); }
  function sortByNameDown(a, b) { return b.inmueble.nombre.localeCompare(a.inmueble.nombre); }
  function sortByCategoryUp(a, b) { return a.inmueble.categoria.localeCompare(b.inmueble.categoria); }
  function sortByCategoryDown(a, b) { return b.inmueble.categoria.localeCompare(a.inmueble.categoria); }
  function sortByTypeUp(a, b) { return a.inmueble.tipo.localeCompare(b.inmueble.tipo); }
  function sortByTypeDown(a, b) { return b.inmueble.tipo.localeCompare(a.inmueble.tipo); }
  function sortByRoomsUp(a, b) { return a.inmueble.habitaciones.localeCompare(b.inmueble.habitaciones); }
  function sortByRoomsDown(a, b) { return b.inmueble.habitaciones.localeCompare(a.inmueble.habitaciones); }
  function sortByBathroomsUp(a, b) { return a.inmueble.baños.localeCompare(b.inmueble.baños); }
  function sortByBathroomsDown(a, b) { return b.inmueble.baños.localeCompare(a.inmueble.baños); }
  function sortByGaragesUp(a, b) { return a.inmueble.parqueaderos.localeCompare(b.inmueble.parqueaderos); }
  function sortByGaragesDown(a, b) { return b.inmueble.parqueaderos.localeCompare(a.inmueble.parqueaderos); }
  function sortByAreaUp(a, b) { return a.inmueble.area.localeCompare(b.inmueble.area); }
  function sortByAreaDown(a, b) { return b.inmueble.area.localeCompare(a.inmueble.area); }
  function sortByValueUp(a, b) { return a.inmueble.valor.localeCompare(b.inmueble.valor); }
  function sortByValueDown(a, b) { return b.inmueble.valor.localeCompare(a.inmueble.valor); }
  function sortByDescriptionUp(a, b) { return a.inmueble.descripcion.localeCompare(b.inmueble.descripcion); }
  function sortByDescriptionDown(a, b) { return b.inmueble.descripcion.localeCompare(a.inmueble.descripcion); }
  function sortByCityUp(a, b) { return a.inmueble.ciudad.localeCompare(b.inmueble.ciudad); }
  function sortByCityDown(a, b) { return b.inmueble.ciudad.localeCompare(a.inmueble.ciudad); }
  function sortByNeighborhoodUp(a, b) { return a.inmueble.sector.localeCompare(b.inmueble.sector); }
  function sortByNeighborhoodDown(a, b) { return b.inmueble.sector.localeCompare(a.inmueble.sector); }
  function sortByStratumUp(a, b) { return a.inmueble.estrato.localeCompare(b.inmueble.estrato); }
  function sortByStratumDown(a, b) { return b.inmueble.estrato.localeCompare(a.inmueble.estrato); }
  function sortByStatusUp(a, b) { return a.inmueble.estado.localeCompare(b.inmueble.estado); }
  function sortByStatusDown(a, b) { return b.inmueble.estado.localeCompare(a.inmueble.estado); }
  
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
                <InputText id={'query-id'} placeholder={'Id'} value={queryId} onInputChange={(target) => setQueryId(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
              </div>
              <div className='col'>
                <InputText id={'query-name'} placeholder={'Nombre'} value={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
              </div>
            </div>
          </div>
        </div>
        
      <div className='stock overflow-scroll'>
        <div className='row flex-nowrap'>
          <span className='col-4 col-sm-2 border text-center bg-main-transparent-color'>
            <div className='row justify-content-center'>
              <div className='col-3 col-sm-1 align-self-center'>
                <HomeWarehouse strokeWidth={2} width={iconSize - 0.15} height={iconSize - 0.15}/>
              </div>
              <div className='col-2'>
                <div className='row lh-1'>
                  <button className='border-0 bg-main-transparent-color dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(1)}><Arrows direction={"up"}/></button>
                </div>
                <div className='row lh-1'>
                  <button className='border-0 bg-main-transparent-color dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(2)}><Arrows direction={"down"}/></button>
                </div>
              </div>
            </div>
          </span>
          <span className='col-auto px-2 border border-light text-center bg-main-transparent-color'><Camera strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><Home strokeWidth={1} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><Category strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Type strokeWidth={0} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Bed strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Car strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Bath strokeWidth={0.25} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Area strokeWidth={1} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><HomeDollar strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-3 border border-light text-center bg-main-transparent-color'><Description strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><MapLocation strokeWidth={2.25} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><MapPin strokeWidth={0.25} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><LocationArrow strokeWidth={0.25} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><HomeQuestion strokeWidth={2} width={iconSize} height={iconSize}/></span>
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
                                                                  : ( sortBy === 25 ? sortByStatusUp 
                                                                    : ( sortBy === 26 ? sortByStatusDown
                                                                      : sortByIdUp
            )))))))))))))))))))))))))))).slice(indexPage[0],indexPage[1]).map(inmueble => (
            <div className='row flex-nowrap' key={inmueble.id}>
              <span className='col-4 col-sm-2 py-1 border text-center'> { inmueble.id } </span>
              <div className='image-upload col-auto px-1 border text-center'>
                  <label htmlFor="file-input"><img src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } alt ="Subir foto" title ="Subir foto" /> </label>
                  <input id={'img' + inmueble.id } type="file"/>
              </div>
              {/* <input type="file" id="picInmueble" name="picInmueble" accept="image/*" className='col-sm-1'></input>
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" multiple className='col-sm-1'></input> */}
              <input defaultValue={ inmueble.detalle.nombre } id={ 'name-' + inmueble.id } onChange={handleChangeName} type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.categoria } id={ 'cat-' + inmueble.id } onChange={ handleChangeCategory } type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.tipo } id={ 'type-' + inmueble.id } onChange={ handleChangeType } type='text' autoComplete='off' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.habitaciones } id={ 'room-' + inmueble.id } onChange={ handleChangeRooms } type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.baños } id={ 'bath-' + inmueble.id } onChange={ handleChangeBathrooms} type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.parqueaderos } id={ 'car-' + inmueble.id } onChange={ handleChangeGarage } type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.area } id={ 'area-' + inmueble.id } onChange={ handleChangeArea } type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.valor } id={ 'val-' + inmueble.id } onChange={ handleChangeValue } type='number' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.descripcion } id={ 'desc-' + inmueble.id } onChange={ handleChangeDescription } type='textarea' autoComplete='off' className='col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.ciudad } id={ 'city-' + inmueble.id } onChange={ handleChangeCity } type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.sector } id={ 'zone-' + inmueble.id } onChange={ handleChangeNeighborhood } type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estrato } id={ 'stra-' + inmueble.id } onChange={ handleChangeStratum } type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estado } id={ 'stat-' + inmueble.id } onChange={ handleChangeStatus } type='text' className='col-sm-2 py-1 border text-center' />
            </div>
          ))
        }
      </div>
      <PaginationBar query={queryId === '' && queryName === ''} array={inmuebles} arrayFiltered={inmueblesFiltered} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
    </>
  )
}