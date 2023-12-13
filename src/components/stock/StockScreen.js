import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { Area } from '../icons/area/Area';
import { Bath } from '../icons/bath/Bath';
import { Bed } from '../icons/bed/Bed';
import { Camera } from '../icons/camera/Camera';
import { Car } from '../icons/car/Car';

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
      <div className='stock'>
        <div className='row flex-nowrap'>
          <span className='col-1 text-center'>Código</span>
          <span className='col-auto text-center'>&nbsp;&nbsp;&nbsp;<Camera strokeWidth={32} width={'1.5em'} height={'1.5em'}/>&nbsp;</span>
          <span className='col-2 text-center'>Nombre&nbsp;Inmueble</span>
          <span className='col-2 text-center'>Categoría</span>
          <span className='col-1 text-center'>Tipo&nbsp;negocio</span>
          <span className='col-1 text-center'><Bed strokeWidth={32} width={'1.5em'} height={'1.5em'}/></span>
          <span className='col-1 text-center'><Car strokeWidth={32} width={'1.5em'} height={'1.5em'}/></span>
          <span className='col-1 text-center'><Bath strokeWidth={0} width={'1.3em'} height={'1.3em'}/></span>
          <span className='col-1 text-center'><Area strokeWidth={32} width={'1em'} height={'1em'}/></span>
          <span className='col-2 text-center'>Valor</span>
          <span className='col-3 text-center'>Descripción</span>
          <span className='col-1 text-center'>Ciudad</span>
          <span className='col-2 text-center'>Zona/Barrio</span>
          <span className='col-1 text-center'>Estrato</span>
        </div>
        {
          inmuebles.map(inmueble => (
            <div className='row flex-nowrap'>
              {/* <span> { inmueble.id } </span> */}
              <input value={ inmueble.id } type='text' id='nameInmueble' className='col-1 py-1 text-center' disabled />

              <div className="image-upload col-auto">
                  <label htmlFor="file-input"> <img src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } alt ="Subir foto" title ="Subir foto" /> </label>
                  <input id="file-input" type="file"/>
              </div>
              {/* <input src={ urlBaseBackend + '/assets/inmuebles/' + inmueble.detalle.imagen } onChange={ handleInputImagen } type='image' id='imgInmueble' autoComplete='off' className='inputImage col-1 py-1 text-center' alt='img' />
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" className='col-1'></input>
              <input type="file" id="picInmueble" name="picInmueble" accept="image/*" multiple className='col-1'></input> */}
              <input value={ inmueble.detalle.nombre } /* onChange={ handleInputNombre} */ type='text' id='nameInmueble' autoComplete='off' className='col-2 py-1 text-center' />
              <input value={ inmueble.detalle.categoria } /* onChange={ handleInputTipo } */ type='text' id='tipoInmueble' autoComplete='off' className='col-2 py-1 text-center' />
              <input value={ inmueble.detalle.tipo } /* onChange={ handleInputTipo } */ type='text' id='tipoInmueble' autoComplete='off' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.habitaciones } /* onChange={ handleInputHabitaciones } */ type='number' id='habitacionesInmueble' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.baños } /* onChange={ handleInputBaños} */ type='number' id='bañosInmueble' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.parqueaderos } /* onChange={ handleInputParqueaderos } */ type='number' id='parqueaderosInmueble' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.area } /* onChange={ handleInputArea } */ type='number' id='areaInmueble' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.valor } /* onChange={ handleInputValor } */ type='number' id='valorInmueble' className='col-2 py-1 text-center' />
              <input value={ inmueble.detalle.descripcion } /* onChange={ handleDescripcion } */ type='textarea' id='descripcionInmueble' autoComplete='off' className='col-3 py-1 text-center' />
              <input value={ inmueble.detalle.ciudad } /* onChange={ handleInputCiudad } */ type='text' id='ciudadInmueble' autoComplete='off' className='col-1 py-1 text-center' />
              <input value={ inmueble.detalle.sector } /* onChange={ handleInputSector } */ type='text' id='sectorInmueble'  autoComplete='off' className='col-2 py-1 text-center' />
              <input value={ inmueble.detalle.estrato } /* onChange={ handleInputWEstrato } */ type='number' id='estratoInmueble' className='col-1 py-1 text-center' />
            </div>
          ))
        }
      </div>
    </>
  )
}