import { formatterPeso } from '../../../helpers/formatterPeso'

export const InputNumber = ({ limit,value,setQuery }) => {
    return (
        <>
            {/* <input type="number" value={number} step={50000} placeholder={'Precio ' + limit} id="valor" onChange={(event) => setNumber(event.target.value)} className='form-control border rounded border-secondary text-muted text-center py-1 w-100' style={{"opacity":"1"}}></input> */}
            <input type="number" value={value} step={50000} placeholder={'Precio ' + limit} id="valor" onChange={(e) => setQuery(e.target.value)} className='form-control border rounded border-secondary text-muted text-center py-1 w-100' style={{"opacity":"1"}}></input>
        </>
    )
}