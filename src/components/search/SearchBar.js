import { Dropdown } from '../forms/dropdown/Dropdown';
import { InputText } from '../forms/inputs/InputText';
import { InputNumber } from '../forms/inputs/InputNumber';

export const SearchBar = ({ queryName,queryCategory,queryType,queryValueMin,queryValueMax,setQueryName,setQueryCategory,setQueryType,setQueryValueMin,setQueryValueMax,categorias,tipos }) => {
  return (
    <ul className='list-group list-group-horizontal-lg border justify-content-between' >
      <li className='list-group-item border-white'>
        <InputText placeholder={'Nombre inmueble'} inputText={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-secondary text-muted text-center py-1' />
      </li>
      <li className='list-group-item border-white '>
        <Dropdown value={'Tipo inmueble'} query={queryCategory} parameters={categorias} setQuery={setQueryCategory} />
      </li>
      <li className='list-group-item border-white'>
        <Dropdown value={'Tipo negocio'} query={queryType} parameters={tipos} setQuery={setQueryType} />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber limit={'desde'} value={queryValueMin} name={'searchValueMin'} onInputChange={(values) => setQueryValueMin(values.formattedValue.replace('$ ','').split(',').join(''))}  />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber limit={'hasta'} value={queryValueMax} name={'searchValueMax'} onInputChange={(values) => setQueryValueMax(values.formattedValue.replace('$ ','').split(',').join(''))}/>
      </li>
    </ul> 
  )
}