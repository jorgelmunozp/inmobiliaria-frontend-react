import React, { useState } from 'react';
import { Dropdown } from '../../forms/dropdown/Dropdown';
import { InputFile } from '../../forms/inputs/InputFile';
import { InputNumber } from '../../forms/inputs/InputNumber';
import { InputText } from '../../forms/inputs/InputText';
import { HomeThumbnail } from '../../icons/home/HomeThumbnail';

export const InmuebleUpload = ({ inmuebles, urlApiInmuebles, urlBaseFrontend, categorias, tipos, estados }) => {
  const [ code, setCode ] = useState( inmuebles.slice(-1)[0].id + 1 ); 
  const [ image, setImage ] = useState(''); 
  const [ name, setName ] = useState(''); 
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
  const [ images, setImages ] = useState([]); 

  console.log("code: ",code)
  console.log("image: ",image)
  console.log("image: ",name)
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

  return (
    <>
      <hr />
      <center><h5>Subir Inmueble</h5></center> 
      <hr />
      <center><HomeThumbnail color={'#aaaaaa'} height={2} width={2} /></center>
      <div className="container mt-3">
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputNumber placeholder={'Código'} id={'codigo'} value={code} disabled onInputChange={(values) => setCode(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className="col my-2">
            <InputFile id={'image-primary'} placeholder={'Imagen'} multiple={false} acceptFiles={"image/*"} file={image} setFile={setImage} className="input form-control border-muted text-muted shadow-sm"/>
          </div>

          <div className='col my-2'>
            <InputText id={'nombre'} placeholder={'nombre'} inputText={name} onInputChange={(values) => setName(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputNumber prefix={'$ '} placeholder={'Valor'} id={'valor'} value={value} onInputChange={(values) => setValue(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Categoría'} query={category} parameters={categorias.slice(1,categorias.length)} setQuery={setCategory} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Tipo negocio'} query={type} parameters={tipos.slice(1,tipos.length)} setQuery={setType} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Estado'} query={state} parameters={estados} setQuery={setStatus} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputNumber placeholder={'Habitaciones'} id={'habitaciones'} value={rooms} onInputChange={(values) => setRooms(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputNumber placeholder={'Baños'} id={'baños'} value={bathrooms} onInputChange={(values) => setBathooms(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputNumber placeholder={'Parqueaderos'} id={'parqueaderos'} value={garages} onInputChange={(values) => setGarages(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputNumber placeholder={'Área'} id={'area'} value={area} onInputChange={(values) => setArea(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputText id={'ciudad'} placeholder={'Ciudad'} inputText={city} onInputChange={(values) => setCity(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputText id={'sector'} placeholder={'Sector'} inputText={neighborhood} onInputChange={(values) => setNeighborhood(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputNumber placeholder={'Estrato'} id={'estrato'} value={stratum} onInputChange={(values) => setStratum(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col my-2'>
            <InputText id={'descripcion'} placeholder={'Descripción'} inputText={description} onInputChange={(values) => setDescription(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className="col my-2">
            <InputFile id={'images-secondary'} placeholder={'Imagenes'} multiple={true} acceptFiles={"image/*"} file={images} setFile={setImages} className="input form-control border-muted text-muted shadow-sm"/>
          </div>
        </div>
      </div>
    </>
  )
}
