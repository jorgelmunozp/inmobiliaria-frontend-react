import React,{ useState } from 'react';
import { formatterPeso } from '../../../helpers/formatterPeso'

export const InputNumber = ({ limit }) => {
    const [number, setNumber] = useState();

    return (
        <>
            <input type="number" value={number} placeholder={'Precio ' + limit} id="valor" onChange={(event) => setNumber(event.target.value)} className='form-control border rounded border-secondary text-muted text-center py-1 w-100' style={{"opacity":"1"}}></input>
        </>
    )
}