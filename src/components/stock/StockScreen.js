import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const StockScreen = ({ inmuebles }) => {

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
      <center><h4>Inventario Inmuebles</h4></center> 
      <hr />
        <div className=''>
          {
            inmuebles.map(inmueble => (
              <div>
                <span> { inmueble.id } </span>
                <input value={ inmueble.detalle.nombre } /* onChange={ handleInputName } */ type='text' id='nameInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.imagen } /* onChange={ handleInputImage } */ type='text' id='imgInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.tipo } /* onChange={ handleInputType} */ type='text' id='tipoInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.habitaciones } /* onChange={ handleInputName } */ type='number' id='habitacionesInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.baños } /* onChange={ handleInputName } */ type='number' id='bañosInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.parqueaderos } /* onChange={ handleInputName } */ type='number' id='parqueaderosInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.area } /* onChange={ handleInputName } */ type='number' id='areaInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.valor } /* onChange={ handleInputName } */ type='number' id='valorInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.descripcion } /* onChange={ handleInputName } */ type='textarea' id='descripcionInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.ciudad } /* onChange={ handleInputName } */ type='text' id='ciudadInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.sector } /* onChange={ handleInputName } */ type='text' id='sectorInmueble'  autoComplete='off' className='input px-2 py-2 text-center' />
                <input value={ inmueble.detalle.estrato } /* onChange={ handleInputName } */ type='number' id='estratoInmueble' autoComplete='off' className='input px-2 py-2 text-center' />
              </div>
            ))
          }
        </div>
    </>
  )
}