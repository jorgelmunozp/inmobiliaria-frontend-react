import { useState, useEffect } from 'react';
import { DropdownCountries } from './DropdownCountries';

export const CountriesBar = ({ countries, country, setCountry, state, setState, city, setCity }) => {
  const [ states, setStates ] = useState([]);
  const [ cities, setCities] = useState([]);
  
  useEffect(() => {
    setState('');
    setCity('');
    setStates( ( countries.length !== 0 ) ? countries.filter(parameter => parameter.name.includes(country))[0].states : [] );
  },[country,states]);

  useEffect(() => {
    setCity('');
    setCities( ( states.length !== 0 ) ? states.filter(parameter => parameter.name.includes(state))[0].cities : [] )
  },[state]);

  return (
    <div className='row d-sm-flex'>
        <div className='col'>
          <DropdownCountries placeholder={'País'} defaultSelect={'Colombia'} parameters={ countries } query={ country } setQuery={ setCountry } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
        <div className='col mt-2 mt-md-0 mt-sm-0 mb-1'>
          <DropdownCountries placeholder={'Departamento'} parameters={ states } query={ state } setQuery={ setState } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
        <div className='col mt-1 mt-md-0 mt-sm-2'>
          <DropdownCountries placeholder={'Ciudad'} parameters={ cities } query={ city } setQuery={ setCity } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
    </div>
  )
}
