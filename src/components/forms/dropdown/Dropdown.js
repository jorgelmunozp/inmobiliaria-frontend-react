export const Dropdown = ({ value,query,parameters,setQuery }) => {

    return(
        <div className="dropdown">
              <button className="btn border border-secondary text-muted dropdown-toggle py-1 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                { query === '' ? value : query }
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                { parameters.map((parameters) => {
                  return (<li key={JSON.stringify(parameters)}><button className="dropdown-item" value={ parameters.parameter } onClick={(e) => {setQuery(e.target.value);}}>{ parameters.parameter }</button></li>);
                })}
              </ul>
        </div>
    )
}