import { DropdownCountries } from './DropdownCountries';

export const CountriesBar = ({ parameters, country, setCountry, state, setState, city, setCity }) => {
  const states = parameters.filter(parameter => parameter.name.includes(country))[0].states;
  // const cities = states.filter(parameter => parameter.name.includes(state))[0].cities;

  return (
    <div className='row d-sm-flex'>
        <div className='col'>
            <DropdownCountries placeholder={'País'} defaultSelect={'Colombia'} query={ country } setQuery={ setCountry } parameters={ parameters } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
        <div className='col my-2 my-sm-0'>
            <DropdownCountries placeholder={'Departamento'} query={ state } setQuery={ setState } parameters={ parameters.filter(parameter => parameter.name.includes(country))[0].states } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
        <div className='col'>
            <DropdownCountries placeholder={'Ciudad'} query={ city } setQuery={ setCity } parameters={ states.length !== 0 ? states.filter(parameter => parameter.name.includes(state))[0].cities : [" "] } className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
        </div>
    </div>
  )
}
