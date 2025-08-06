import { lazy } from 'react';
const Dropdown = lazy(() => import('../../forms/dropdown/Dropdown.js'));
const InputText = lazy(() => import('../../forms/inputs/InputText.js'));
const InputNumber = lazy(() => import('../../forms/inputs/InputNumber.js'));

export const SearchBar = ({ queryName,queryCategory,queryType,queryValueMin,queryValueMax,setQueryName,setQueryCategory,setQueryType,setQueryValueMin,setQueryValueMax,categorias,tipos }) => {
  return (
    <ul className='list-group list-group-horizontal-lg border justify-content-between' >
      <li className='list-group-item border-white'>
        <InputText id={'nonbre-inmueble'} placeholder={'Nombre inmueble'} inputText={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted border-1 text-muted text-center shadow-sm' />
      </li>
      <li className='list-group-item border-white '>
        <Dropdown placeholder={'Tipo inmueble'} query={queryCategory} parameters={categorias} setQuery={setQueryCategory} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"} />
      </li>
      <li className='list-group-item border-white'>
        <Dropdown placeholder={'Tipo negocio'} query={queryType} parameters={tipos} setQuery={setQueryType} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"} />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber prefix={ '$ ' } id={'Precio desde'} placeholder={'Precio desde'} value={queryValueMin} name={'searchValueMin'} onInputChange={(values) => setQueryValueMin(values.formattedValue.replace('$ ','').split(',').join(''))} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'} />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber prefix={ '$ ' } id={'Precio hasta'} placeholder={'Precio hasta'} value={queryValueMax} name={'searchValueMax'} onInputChange={(values) => setQueryValueMax(values.formattedValue.replace('$ ','').split(',').join(''))} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'} />
      </li>
    </ul> 
  )
}
export default SearchBar;