import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SearchScreen = ({ inmuebles }) => {

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
      <center><h4>Buscar Inmueble</h4></center> 
      <hr />
      <h5>Que tipo de inmueble buscas?</h5>
      <hr />
      <div className='row'>
        <h5 className='mt-3'>Características</h5>
        <ul className='list-group list-group-horizontal-sm'>
          <li className='list-group-item fw-bolder border-white'>Habitaciones: <span className='text-muted'>{ 1 }</span></li>
          <li className='list-group-item fw-bolder border-white'>Baños: <span className='text-muted'>{ 2 }</span></li>
          <li className='list-group-item fw-bolder border-white'>Parqueadero: <span className='text-muted'>{ 3 }</span></li>
        </ul>

          <div className='col-3'>
              <TextField label='Nombre inmueble' type='text'
                name='searchText' autoComplete='off' variant="outlined" margin="dense"
                className='form-control rounded border-muted px-2 py-2 text-center'
                value={ searchText } onChange={ handleInputSearch }/>
          </div>
          <div className='col-2'>
            <FormControl fullWidth margin="dense">
              <InputLabel id="tipoInmueble-label" className="select">
                Tipo Inmueble
              </InputLabel>
              <Select id="tipoInmueble" label="tipoInmueble" labelId="tipoInmueble-label"
                // value={tipo} onChange={handleChangeTipoInmueble}
              >
                { inmuebles.map((inmuebles) => {
                  return (<MenuItem value={inmuebles.id} key={'cat' + inmuebles.id} className="select-item">{ inmuebles.detalle.categoria }</MenuItem>);
                })}
              </Select>
            </FormControl>
          </div>
          <div className='col-2'>
            <FormControl fullWidth margin="dense">
              <InputLabel id="tipoNegocio-label" className="select">
                Tipo Negocio
              </InputLabel>
              <Select id="tipoNegocio" label="tipoNegocio" labelId="tipoNegocio-label"
                // value={tipo} onChange={handleChangeTipoInmueble}
              >
                { inmuebles.map((inmuebles) => {
                  return (<MenuItem value={inmuebles.id} key={'tip' + inmuebles.id} className="select-item">{ inmuebles.detalle.tipo } </MenuItem>);
                })}
              </Select>
            </FormControl>
          </div>
          <div className='col-2'>
              <TextField label='Habitaciones' type='number'
                name='numHabitaciones' autoComplete='off' variant="outlined" margin="dense"
                className='form-control rounded border-muted px-2 py-2 text-center'
                value={ searchText } onChange={ handleInputSearch }/>
          </div>
          <div className='col-2'>
              <TextField label='Baños' type='number'
                name='numHabitaciones' autoComplete='off' variant="outlined" margin="dense"
                className='form-control rounded border-muted px-2 py-2 text-center'
                value={ searchText } onChange={ handleInputSearch }/>
          </div>
        </div>
        <br></br>
        <div className=''>
          <h5>Inmuebles disponibles</h5>
          <hr />
          {
              (query === '')
                  ? <div className="alert alert-primary"> Inmuebles </div>
                  : ( inmueblesFiltered.length === 0 ) 
                      && <div className="alert alert-danger"> No hay resultados: { query } </div>
          }

          {
              inmueblesFiltered.map(inmueble => (
                  <InmuebleCard key={ inmueble.id } { ...inmueble } />
              ))
          }
        </div>
    </>
  )
}