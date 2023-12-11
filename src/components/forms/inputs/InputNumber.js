import { formatterPeso } from '../../../helpers/formatterPeso'

export const InputNumber = ({ limit,value,name,handleInputChange }) => {
    return (
        <>
            <input type="number" name={name} value={value} min={0} step={50000} placeholder={'Precio ' + limit} id={name} onChange={handleInputChange} className='form-control border rounded border-secondary text-muted text-center py-1 w-100' style={{"opacity":"1"}}></input>
        </>
    )
}