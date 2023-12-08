import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getInmueblesByName } from '../../selectors/getInmueblesByName';
import { InmuebleCard } from '../inmueble/InmuebleCard';
import { TextField } from "@mui/material";

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

      <div className='row'> 
          <div className='col-5'>
            <h5>Que tipo de inmueble buscas?</h5>
            <hr />

              <TextField 
                label='Nombre inmueble' type='text'
                name='searchText' autoComplete='off' variant="outlined" margin="dense"
                className='form-control rounded border-muted px-2 py-2 text-center'
                value={ searchText } onChange={ handleInputSearch }
              />
              <br/>
          </div>

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
                    <InmuebleCard
                        key={ inmueble.id }
                        { ...inmueble }
                    />
                ))
            }
          </div>
      </div>
    </>
  )
}