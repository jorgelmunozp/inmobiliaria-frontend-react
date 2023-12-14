import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { Area } from '../icons/area/Area';
import { Bath } from '../icons/bath/Bath';
import { Bed } from '../icons/bed/Bed';
import { Camera } from '../icons/camera/Camera';
import { Car } from '../icons/car/Car';
import { Category } from '../icons/category/Category';
import { City } from '../icons/city/City';
import { Id } from '../icons/id/Id';
import { Description } from '../icons/description/Description';
import { Home } from '../icons/home/Home';
import { HomeDollar } from '../icons/home/HomeDollar';
import { LocationArrow } from '../icons/location/LocationArrow'
import { LocationSight } from '../icons/location/LocationSight';
import { MapLocation } from '../icons/map/MapLocation';
import { MapPin } from '../icons/map/MapPin';
import { Type } from '../icons/type/Type';
import { Stratum } from '../icons/stratum/Stratum';
import { Dollar } from '../icons/dollar/Dollar';

export const StockScreen = ({ inmuebles }) => {

  const urlBaseBackend = process.env.REACT_APP_URL_BASE_BACKEND;

  /* Query */
  let query= '';
  const navigate = useNavigate();
  const [ formInputValues,handleInputChange ] = useForm({ searchText: query });
  let { searchText } = formInputValues;
  query = searchText;
  const inmueblesFiltered = useMemo( () => getInmueblesByName(query,inmuebles), [query,inmuebles] );

  const handleSearch = () => {

  };

  const handleInputSearch = (target) => {
    handleInputChange(target);
    searchText = target.target.value
    handleSearch();
  }

  return (
    <>
      <hr />
      <center><h5>Inventario Inmuebles</h5></center> 
      <hr />
      <div className='stock overflow-scroll'>
        <div className='row flex-nowrap'>
          <span className='col-1 border text-center bg-main-transparent-color'><Id strokeWidth={2} width={'1.3em'} height={'1.3em'}/></span>
          <span className='col-auto px-2 border border-light text-center bg-main-transparent-color'><Camera strokeWidth={40} width={'1.5em'} height={'1.5em'}/></span>
          <span className='col-2 border border-light text-center bg-main-transparent-color'><Home strokeWidth={1} width={'1.8em'} height={'1.6em'}/></span>
          <span className='col-2 border border-light text-center bg-main-transparent-color'><Category strokeWidth={2} width={'1.6em'} height={'1.6em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><Type strokeWidth={0.5} width={'1.4em'} height={'1.4em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><Bed strokeWidth={40} width={'1.7em'} height={'1.7em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><Car strokeWidth={40} width={'1.7em'} height={'1.7em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><Bath strokeWidth={0.25} width={'1.6em'} height={'1.6em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><Area strokeWidth={1} width={'1.75em'} height={'1.75em'}/></span>
          <span className='col-2 border border-light text-center bg-main-transparent-color'><HomeDollar strokeWidth={2} width={'1.6em'} height={'1.6em'}/></span>
          <span className='col-3 border border-light text-center bg-main-transparent-color'><Description strokeWidth={2} width={'1.6em'} height={'1.6em'}/></span>
          <span className='col-2 border border-light text-center bg-main-transparent-color'><MapLocation strokeWidth={2.5} width={'1.4em'} height={'1.4em'}/></span>
          <span className='col-2 border border-light text-center bg-main-transparent-color'><MapPin strokeWidth={0.5} width={'1.4em'} height={'1.4em'}/></span>
          <span className='col-1 border border-light text-center bg-main-transparent-color'><LocationArrow strokeWidth={0.25} width={'1.5em'} height={'1.5em'}/></span>
        </div>
        {
          inmuebles.map(inmueble => (
            <div className='row flex-nowrap'>
              {/* <span> { inmueble.id } </span> */}
              <input value={ inmueble.id } key={ 'id' + inmueble.id } type='text' id={ 'id' + inmueble.id } className='col-1 py-1 text-center' disabled />
              <div className='image-upload col-auto px-1 border text-center'>
                  <label htmlFor="file-input"> <img src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } alt ="Subir foto" title ="Subir foto" /> </label>
                  <input key={ 'img' + inmueble.id } id={'pic' + inmueble.id } type="file"/>
              </div>
              {/* <input src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } onChange={ handleInputImagen } type='image' id='imgInmueble' autoComplete='off' className='inputImage col-1 py-1 text-center' alt='img' />
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" className='col-1'></input>
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" multiple className='col-1'></input> */}
              <input value={ inmueble.detalle.nombre } key={ 'name' + inmueble.id } /* onChange={ handleInputNombre} */ type='text' id='nameInmueble' autoComplete='off' className='col-2 py-1 border text-center' />
              <input value={ inmueble.detalle.categoria } key={ 'cat' + inmueble.id } /* onChange={ handleInputTipo } */ type='text' id='tipoInmueble' autoComplete='off' className='col-2 py-1 border text-center' />
              <input value={ inmueble.detalle.tipo } key={ 'type' + inmueble.id } /* onChange={ handleInputTipo } */ type='text' id='tipoInmueble' autoComplete='off' className='col-1 py-1 border text-center' />
              <input value={ inmueble.detalle.habitaciones } key={ 'room' + inmueble.id } /* onChange={ handleInputHabitaciones } */ type='number' id='habitacionesInmueble' className='col-1 py-1 border text-center' />
              <input value={ inmueble.detalle.baños } key={ 'bath' + inmueble.id } /* onChange={ handleInputBaños} */ type='number' id='bañosInmueble' className='col-1 py-1 border text-center' />
              <input value={ inmueble.detalle.parqueaderos } key={ 'car' + inmueble.id } /* onChange={ handleInputParqueaderos } */ type='number' id='parqueaderosInmueble' className='col-1 py-1 border text-center' />
              <input value={ inmueble.detalle.area } key={ 'area' + inmueble.id } /* onChange={ handleInputArea } */ type='number' id='areaInmueble' className='col-1 py-1 border text-center' />
              <input value={ inmueble.detalle.valor } key={ 'val' + inmueble.id } /* onChange={ handleInputValor } */ type='number' id='valorInmueble' className='col-2 py-1 border text-center' />
              <input value={ inmueble.detalle.descripcion } key={ 'desc' + inmueble.id } /* onChange={ handleDescripcion } */ type='textarea' id='descripcionInmueble' autoComplete='off' className='col-3 py-1 border text-center' />
              <input value={ inmueble.detalle.ciudad } key={ 'city' + inmueble.id } /* onChange={ handleInputCiudad } */ type='text' id='ciudadInmueble' autoComplete='off' className='col-2 py-1 border text-center' />
              <input value={ inmueble.detalle.sector } key={ 'zone' + inmueble.id } /* onChange={ handleInputSector } */ type='text' id='sectorInmueble'  autoComplete='off' className='col-2 py-1 border text-center' />
              <input value={ inmueble.detalle.estrato } key={ 'stra' + inmueble.id } /* onChange={ handleInputWEstrato } */ type='number' id='estratoInmueble' className='col-1 py-1 border text-center' />
            </div>
          ))
        }
      </div>
    </>
  )
}