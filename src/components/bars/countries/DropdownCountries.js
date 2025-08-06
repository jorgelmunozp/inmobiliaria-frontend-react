import { useEffect } from 'react';

export const DropdownCountries = ({ placeholder,query,setQuery,parameters,defaultSelect='',className }) => {
  const class1 = ' dropdown-toggle text-start text-nowrap text-truncate pt-2 ps-2 ps-sm-3 pe-5 w-100';
  const class2 = ' dropdown-toggle text-center text-nowrap text-truncate pt-4 ps-2 ps-sm-3 pe-5 w-100';

  useEffect(() => {
    if( defaultSelect.length !== 0 && query.length === 0 ) { setQuery(defaultSelect); }
  });

  return(
    <div className="dropdown form-floating w-100 min-width-10">
      <button className={ className + (query.length === 0 ? class1 : class2) } type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        { query.length === 0 ? placeholder : query }
      </button>
      <label htmlFor="dropdownMenuButton" className="form-label text-muted" >
        { query.length === 0 ? '' : placeholder }
      </label>

      <ul className={"dropdown-menu text-center shadow-sm w-100 overflow-auto " + (query.length === 0 ? "visible" : " hidden")} style={ parameters.length === 0 ? {"maxHeight":"0rem"} : {"maxHeight":"12rem"} } aria-labelledby="dropdownMenuButton">
        {
          parameters.map((parameter) => {
            return (<li key={ JSON.stringify(parameter) }><button className="dropdown-item" value={ parameter.name } onClick={ (e) => setQuery(e.target.value) }>{ parameter.name }</button></li>);
          })
        }
      </ul>
    </div>
  )
}
export default DropdownCountries;