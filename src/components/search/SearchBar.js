import { Dropdown } from '../forms/dropdown/Dropdown';
import { InputText } from '../forms/inputs/InputText'
import { InputNumber } from '../forms/inputs/InputNumber'
import { formatterPeso } from '../../helpers/formatterPeso'

export const SearchBar = ({ searchText,queryCategory,queryType,queryValueMin,queryValueMax,handleInputText,setQueryCategory,setQueryType,handleInputNumberMin,handleInputNumberMax,categorias,tipos }) => {
  return (
    <ul className='list-group list-group-horizontal-lg border justify-content-between'>
      <li className='list-group-item border-white'>
        <InputText placeholder={'Nombre inmueble'} inputText={searchText} handleInput={handleInputText} />
      </li>
      <li className='list-group-item border-white '>
        <Dropdown value={'Tipo inmueble'} query={queryCategory} parameters={categorias} setQuery={setQueryCategory} />
      </li>
      <li className='list-group-item border-white'>
        <Dropdown value={'Tipo negocio'} query={queryType} parameters={tipos} setQuery={setQueryType} />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber limit={'desde'} value={queryValueMin} name={'searchValueMin'} handleInputChange={handleInputNumberMin} />
      </li>
      <li className='list-group-item border-white'>
        <InputNumber limit={'hasta'} value={queryValueMax} name={'searchValueMax'} handleInputChange={handleInputNumberMax}/>
      </li>
    </ul> 
  )
}