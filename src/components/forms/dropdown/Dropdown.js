export const Dropdown = ({ value,query,parameters,setQuery,className }) => {
    return(
      <div className="dropdown form-floating w-100">
        <button className={className + (query === '' ? ' text-start pt-2 ps-2 ps-sm-3 pe-5' : ' text-center pt-4 ps-2 ps-sm-3 pe-5')} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          { query === '' ? value : query }
        </button>
        <label htmlFor="dropdownMenuButton" className="form-label text-muted text-nowrap text-truncate" >
          { query === '' ? '' : value } 
        </label>

        <ul className="dropdown-menu text-center shadow-sm w-100" aria-labelledby="dropdownMenuButton">
          { parameters.map((parameters) => {
            return (<li key={JSON.stringify(parameters)}><button className="dropdown-item" value={ parameters.parameter } onClick={(e) => setQuery(e.target.value)}>{ parameters.parameter }</button></li>);
          })}
        </ul>
      </div>
    )
}