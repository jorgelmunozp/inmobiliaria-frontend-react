import React, { useState } from 'react';
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

import { PaginationBar } from '../../pagination/PaginationBar';

export const StockScreen = ({ inmuebles }) => {
  const urlBaseBackend = process.env.REACT_APP_URL_BASE_BACKEND;
  const iconSize = 1.5;

  /* Query */
  let [ query, setQuery ] = useState('');
  const inmueblesFiltered = [];

  /* Pagination */
  const [itemPerPage, setItemPerPage ] = useState(10);                 // Se define el número de items por página
  const [indexPage, setIndexPage ] = useState([0,itemPerPage]);       // Se calculan los indices de la paginación para el filtro Slice(x,y) que entrega un rango de los items de x a y
  const numPages = ((query === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  const resPages = ((query === '') ? inmuebles.length%itemPerPage : inmueblesFiltered.length%itemPerPage);                   // Se calcula la cantidad de páginas = cantidad de items/item por página
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
  

  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ type, setType ] = useState("");
  const [ rooms, setRooms ] = useState("");
  const [ garage , setGarage ] = useState("");
  const [ area, setArea ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ city, setCity ] = useState(""); 
  const [ neighborhood, setNeighborhood ] = useState("");
  const [ stratum, setStratum ] = useState("");

  const handleChangeName = (event) => { setName(event.target.value); };
  const handleChangeCategory = (event) => { setCategory(event.target.value); };

  const handleStock = () => {

  };

  const handleChangeStock = (target) => {
    console.log("target.target: ",target.target)
    handleStock();
  }

  return (
    <>
      <hr />
      <center><h5>Inventario Inmuebles</h5></center> 
      <hr />
      <div className='stock overflow-scroll'>
        <div className='row flex-nowrap'>
          <span className='col-sm-1 border text-center bg-main-transparent-color'><HomeWarehouse strokeWidth={2} width={iconSize - 0.15} height={iconSize - 0.15}/></span>
          <span className='col-auto px-2 border border-light text-center bg-main-transparent-color'><Camera strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><Home strokeWidth={1} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><Category strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Type strokeWidth={0.5} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Bed strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Car strokeWidth={40} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Bath strokeWidth={0.25} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><Area strokeWidth={1} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><HomeDollar strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-3 border border-light text-center bg-main-transparent-color'><Description strokeWidth={2} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><MapLocation strokeWidth={2.5} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-2 border border-light text-center bg-main-transparent-color'><MapPin strokeWidth={0.5} width={iconSize} height={iconSize}/></span>
          <span className='col-sm-1 border border-light text-center bg-main-transparent-color'><LocationArrow strokeWidth={0.25} width={iconSize} height={iconSize}/></span>
        </div>
        {
          inmuebles.slice(indexPage[0],indexPage[1]).map(inmueble => (
            <div className='row flex-nowrap' key={inmueble.id}>
              <span className='col-sm-1 py-1 border text-center'> { inmueble.id } </span>
              <div className='image-upload col-auto px-1 border text-center'>
                  <label htmlFor="file-input"><img src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } alt ="Subir foto" title ="Subir foto" /> </label>
                  <input id={'img' + inmueble.id } type="file"/>
              </div>
              {/* <input type="file" id="picInmueble" name="picInmueble" accept="image/*" className='col-sm-1'></input>
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" multiple className='col-sm-1'></input> */}
              <input defaultValue={ inmueble.detalle.nombre } id={ 'name' + inmueble.id } onChange={handleChangeStock} type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.categoria } id={ 'cat' + inmueble.id } /* onChange={ handleInputCategoria } */ type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.tipo } id={ 'type' + inmueble.id } /* onChange={ handleInputTipo } */ type='text' autoComplete='off' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.habitaciones } id={ 'room' + inmueble.id } /* onChange={ handleInputHabitaciones } */ type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.baños } id={ 'bath' + inmueble.id } /* onChange={ handleInputBaños} */ type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.parqueaderos } id={ 'car' + inmueble.id } /* onChange={ handleInputParqueaderos } */ type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.area } id={ 'area' + inmueble.id } /* onChange={ handleInputArea } */ type='number' className='col-sm-1 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.valor } id={ 'val' + inmueble.id } /* onChange={ handleInputValor } */ type='number' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.descripcion } id={ 'desc' + inmueble.id } /* onChange={ handleDescripcion } */ type='textarea' autoComplete='off' className='col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.ciudad } id={ 'city' + inmueble.id } /* onChange={ handleInputCiudad } */ type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.sector } id={ 'zone' + inmueble.id } /* onChange={ handleInputSector } */ type='text' autoComplete='off' className='col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estrato } id={ 'stra' + inmueble.id } /* onChange={ handleInputWEstrato } */ type='number' className='col-sm-1 py-1 border text-center' />
            </div>
          ))
        }
      </div>
      <PaginationBar query={query} array={inmuebles} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
    </>
  )
}