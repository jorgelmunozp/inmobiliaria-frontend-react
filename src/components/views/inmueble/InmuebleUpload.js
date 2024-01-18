import React, { useState } from 'react';
import { Dropdown } from '../../forms/dropdown/Dropdown';
import { InputFile } from '../../forms/inputs/InputFile';
import { InputNumber } from '../../forms/inputs/InputNumber';
import { InputText } from '../../forms/inputs/InputText';
import { HomeThumbnail } from '../../icons/home/HomeThumbnail';

export const InmuebleUpload = ({ inmuebles, urlApiInmuebles, urlBaseFrontend, categorias, tipos, estados }) => {
  const [ code, setCode ] = useState( inmuebles.slice(-1)[0].id + 1 ); 
  const [ image, setImage ] = useState(''); 
  const [ category, setCategory ] = useState(''); 
  const [ type, setType ] = useState(''); 
  const [ state, setState ] = useState(''); 
  const [ rooms, setRooms ] = useState(''); 
  const [ bathrooms, setBathooms ] = useState("");
  const [ garages , setGarages ] = useState("");
  const [ area, setArea ] = useState("");
  const [ value, setValue ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ city, setCity ] = useState(""); 
  const [ neighborhood, setNeighborhood ] = useState("");
  const [ stratum, setStratum ] = useState("");
  const [ status, setStatus ] = useState("");

  console.log("code: ",code)
  console.log("image: ",image)
  console.log("category: ",category)
  console.log("type: ",type)
  console.log("state: ",state)
  console.log("rooms: ",rooms)
  console.log("bathrooms: ",bathrooms)
  console.log("garages: ",garages)
  console.log("area: ",area)
  console.log("value: ",value)
  console.log("description: ",description)
  console.log("city: ",city)
  console.log("neighborhood: ",neighborhood)
  console.log("stratum: ",stratum)
  console.log("status: ",status)

  const HandleChangeImage = (event) => { 
    const imageInput = document.getElementById('formImage').files[0];
    console.log("imageInput: ", imageInput)
  };

  return (
    <>
      <hr />
      <center><h5>Subir Inmueble</h5></center> 
      <hr />
      <div className="container">
      {/* <div className='image-upload img-thumbnail text-center'>
          <label htmlFor='img'><HomeThumbnail color={'#aaaaaa'} height={4} width={4} /> </label>
          <input type="file" id='img' accept="image/*"/>
      </div> */}

        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Código'} id={'codigo'} value={code} disabled onInputChange={(values) => setCode(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>

        <div className='row'>
          <div className="col">
            {/* <input className="form-control" type="file" id="formImage" accept="image/*" onChange={() => setImage(document.getElementById('formImage').files[0]) }/> */}
            <InputFile id={'input-image'} placeholder={'Imagen'} acceptFiles={"image/*"} setFile={setImage} className="input form-control border-muted text-muted shadow-sm"/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Dropdown placeholder={'Categoría'} query={category} parameters={categorias.slice(1,categorias.length)} setQuery={setCategory} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Dropdown placeholder={'Tipo negocio'} query={type} parameters={tipos.slice(1,tipos.length)} setQuery={setType} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Dropdown placeholder={'Estado'} query={state} parameters={estados} setQuery={setState} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Habitaciones'} id={'habitaciones'} value={rooms} onInputChange={(values) => setRooms(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Baños'} id={'baños'} value={bathrooms} onInputChange={(values) => setBathooms(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Parqueaderos'} id={'parqueaderos'} value={garages} onInputChange={(values) => setGarages(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Área'} id={'area'} value={area} onInputChange={(values) => setArea(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber prefix={'$ '} placeholder={'Valor'} id={'valor'} value={value} onInputChange={(values) => setValue(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputText id={'descripcion'} placeholder={'Descripción'} inputText={description} onInputChange={(values) => setDescription(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputText id={'ciudad'} placeholder={'Ciudad'} inputText={city} onInputChange={(values) => setCity(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputText id={'sector'} placeholder={'Sector'} inputText={neighborhood} onInputChange={(values) => setNeighborhood(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <InputNumber placeholder={'Estrato'} id={'estrato'} value={stratum} onInputChange={(values) => setStratum(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>

      </div>
    </>
  )
}
