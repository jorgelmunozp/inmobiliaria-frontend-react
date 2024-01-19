import React, { useState, useEffect } from 'react';
import { Dropdown } from '../../forms/dropdown/Dropdown';
import { InputFile } from '../../forms/inputs/InputFile';
import { InputNumber } from '../../forms/inputs/InputNumber';
import { InputText } from '../../forms/inputs/InputText';
import { InputTextArea } from '../../forms/inputs/InputTextArea';
import { HomeThumbnail } from '../../icons/home/HomeThumbnail';
import { ButtonFetch } from '../../forms/buttons/ButtonFetch';
import { myTitle } from '../../../global';
import { formatterPeso } from '../../../helpers/formatterPeso';

export const InmuebleUpload = ({ inmuebles, urlApiInmuebles, urlBaseFrontend, categorias, tipos, estados, caracteristicas }) => {
  let createFlag = false;
  const [responseStatus, setResponseStatus] = useState(0);

  const [ code, setCode ] = useState( inmuebles.slice(-1)[0].id + 1 ); 
  const [ image, setImage ] = useState(''); 
  const [ status, setStatus ] = useState("");
  const [ type, setType ] = useState(''); 
  const [ category, setCategory ] = useState(''); 
  const [ characteristics, setCharacteristics ] = useState(''); 
  const [ name, setName ] = useState(''); 
  const [ rooms, setRooms ] = useState(''); 
  const [ bathrooms, setBathooms ] = useState("");
  const [ garages , setGarages ] = useState("");
  const [ area, setArea ] = useState("");
  const [ value, setValue ] = useState("");
  const [ city, setCity ] = useState(""); 
  const [ state, setState ] = useState(""); 
  const [ neighborhood, setNeighborhood ] = useState("");
  const [ stratum, setStratum ] = useState("");
  const [ images, setImages ] = useState([]); 
  const [ description, setDescription ] = useState("");
  const [ characteristic, setCharacteristic ] = useState("");

  let descriptionInmueble = myTitle 
             + ( type.toLocaleLowerCase() === "arriendo" ? " arrienda " : (type.toLocaleLowerCase() === "venta" ? " vende " : "")  )
             + ( characteristic.toLocaleLowerCase() )
             + ( category.toLocaleLowerCase() === "apartamento" ? " apartamento en " : (category.toLocaleLowerCase() === "casa" ? " casa en " : "") )
             + ( name )
             + ( neighborhood ? ", sector " + neighborhood : "" )
             + ( city ? (", en la ciudad de " + city + ", " + state) : "" )
             + ( value ? ", por un valor de " + formatterPeso.format(value) + (type.toLocaleLowerCase() === "arriendo" ? " mensual. " : ". ") : "" )
             + ( area ? "Tiene un área de " + area + " m2" : "" )
             + ( (rooms || bathrooms || garages) ? (" y consta de " + (rooms ? ( rooms === "1" ? rooms + " habitación, " : rooms + " habitaciones, ") : "") + (bathrooms ? ( bathrooms === "1" ? bathrooms + " baño, " : bathrooms + " baños, ") : "") + (garages ? (garages === "1" ? garages + " parqueadero, " : garages + " parqueaderos, ") : "")) : "" )
             + ( stratum ? "estrato " + stratum + ". " : "" )
            ;

  useEffect(() => {
    if( characteristics.lastIndexOf('@') !== -1 ) {
      if( category.toLocaleLowerCase() === "apartamento" ) {
        setCharacteristic(characteristics.replace(/.$/, 'o'));
      } else if( category.toLocaleLowerCase() === "casa" ) {
        setCharacteristic(characteristics.replace(/.$/, 'a'));
      }
    } else if( characteristics.lastIndexOf('@') === -1 ) {
      setCharacteristic(characteristics);
    }
    setDescription(descriptionInmueble);
  });

  const dataInmueble = `{
    "detalle": {
      "nombre": "${name}",
      "imagen": "${image}",
      "categoria": "${category}",
      "tipo": "${type}",
      "habitaciones": "${rooms}",
      "baños": "${bathrooms}",
      "parqueaderos": "${garages}",
      "area": "${area}",
      "valor": "${value}",
      "descripcion": "${description}",
      "ciudad": "${city}",
      "departamento": "${state}",
      "sector": "${neighborhood}",
      "estrato": "${stratum}",
      "estado": "${status}",
      "images": "${images}"
    },
    "id": ${code}
  }`

  if(code!=="" && name!=="" && image!=="" && category!=="" && type!=="" && rooms!=="" && bathrooms!=="" && garages!=="" && area!=="" && value!=="" && description!=="" && city!=="" && neighborhood!=="" && stratum!=="" && status!=="" && images!==""){ createFlag = true; }

  console.log("dataInmueble: ",dataInmueble)
  console.log("responseStatus: ",responseStatus)

  if(200 <= responseStatus && responseStatus <= 299){
    setResponseStatus(0);
    // Swal.fire("Cita Registrada", "", "success");
    setCode("");
    setImage("");
    setName("");
    setCategory("");
    setType("");
    setRooms("");
    setBathooms("");
    setGarages("");
    setArea("");
    setValue("");
    setDescription("");
    setCity("");
    setState("");
    setNeighborhood("");
    setStratum("");
    setStatus("");
    setImages("");
  } else if(400 <= responseStatus && responseStatus <= 499){
    // Swal.fire("Cita No Registrada", "", "error");
    setResponseStatus(0);
  } else if(500 <= responseStatus && responseStatus <= 599){
    // Swal.fire("Cita No Registrada", "", "error");
    setResponseStatus(0);
  }

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
            <Dropdown placeholder={'Estado'} query={status} defaultSelect={'Disponible'} parameters={estados} setQuery={setStatus} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <Dropdown placeholder={'Tipo negocio'} query={type} parameters={tipos.slice(1,tipos.length)} setQuery={setType} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Categoría'} query={category} parameters={categorias.slice(1,categorias.length)} setQuery={setCategory} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Caracteristicas'} query={characteristic} parameters={caracteristicas} setQuery={setCharacteristics} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <InputText id={'nombre'} placeholder={'Nombre'} inputText={name} onInputChange={(values) => setName(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputText id={'sector'} placeholder={'Sector'} inputText={neighborhood} onInputChange={(values) => setNeighborhood(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputText id={'departamento'} placeholder={'Departamento'} inputText={state} onInputChange={(values) => setState(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputText id={'ciudad'} placeholder={'Ciudad'} inputText={city} onInputChange={(values) => setCity(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col my-2'>
            <InputNumber prefix={'$ '} placeholder={'Valor'} id={'valor'} value={value} onInputChange={(values) => setValue(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputNumber placeholder={'Área'} id={'area'} value={area} onInputChange={(values) => setArea(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
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
            <InputNumber placeholder={'Estrato'} id={'estrato'} value={stratum} onInputChange={(values) => setStratum(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col my-2'>
            <InputTextArea id={'descripcion'} placeholder={'Descripción'} inputText={description} onInputChange={(values) => setDescription(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 pt-4 pb-5 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className="col my-2">
            <InputFile id={'images-secondary'} placeholder={'Imágenes'} multiple={true} acceptFiles={"image/*"} file={images} setFile={setImages} className="input form-control border-muted text-muted shadow-sm"/>
          </div>
        </div>
        <div className='row'>
          <div className="col my-2">
            <ButtonFetch icon={<HomeThumbnail color={'#ffffff'} />} title={'Crear'} urlApi={urlApiInmuebles} contenidoApi={JSON.stringify(dataInmueble)} setResponseStatus={setResponseStatus} createFlag={createFlag} ></ButtonFetch>
          </div>
        </div>
      </div>
    </>
  )
}
