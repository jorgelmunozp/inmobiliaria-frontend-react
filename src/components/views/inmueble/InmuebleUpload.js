import React, { useState, useEffect, useCallback } from 'react';
import { CountriesBar } from '../../bars/countries/CountriesBar';
import { ButtonFetch } from '../../forms/buttons/ButtonFetch';
import { Dropdown } from '../../forms/dropdown/Dropdown';
import { InputFile } from '../../forms/inputs/InputFile';
import { InputNumber } from '../../forms/inputs/InputNumber';
import { InputText } from '../../forms/inputs/InputText';
import { InputTextArea } from '../../forms/inputs/InputTextArea';
import { HomeThumbnail } from '../../icons/home/HomeThumbnail';
import { myTitle, myColor } from '../../../global';
import { formatterPeso } from '../../../helpers/formatterPeso';
import Swal from 'sweetalert2';

export const InmuebleUpload = ({ inmuebles, urlApiInmuebles, urlBaseFrontend, categorias, tipos, estados, caracteristicas, paises }) => {
  let createFlag = false;
  const [responseStatus, setResponseStatus] = useState(0);

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
  const [ country, setCountry ] = useState(""); 
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
             + ( (city || state || country) ? (city ? (", en la ciudad de " + city + ", " + state + ", " + country) : ( state ? ", en el departamento de " + state + ", " + country : ", en el país " + country)) + ". " : "" )
             + ( area ? "Tiene un área de " + area + " m2" : "" )
             + ( (rooms || bathrooms || garages) ? (" y consta de " 
                    + ( rooms ? ( rooms === "0" ? "" : ( rooms === "1" ? rooms + " habitación, " : rooms + " habitaciones, " )) : "" ) 
                    + ( bathrooms ? ( bathrooms === "0" ? "" : ( bathrooms === "1" ? bathrooms + " baño, " : bathrooms + " baños, ")) : "" ) 
                    + ( garages ? ( garages === "0" ? "" : ( garages === "1" ? garages + " parqueadero " : garages + " parqueaderos ")) : "") 
                  ) : "")
             + ( stratum ? "y su estrato es " + stratum + ". " : "" )
             + ( value ? "Su valor es " + formatterPeso.format(value) + (type.toLocaleLowerCase() === "arriendo" ? " mensual. " : ". ") : "" )
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
      "pais": "${country}",
      "sector": "${neighborhood}",
      "estrato": "${stratum}",
      "estado": "${status}",
      "images": "${images}"
    }
  }`

  console.log("image: ", image)
  console.log("image.name: ", image.name)

  const [imageData, setImageData] = useState({
    base64textString: '',
    imageName: '',
    showImage: false,
  });

  const reader = new FileReader();
  useCallback((image) => {
    if (image) {
      reader.readAsDataURL(image)
    }
  })
  reader.onload = () => {
    setImageData({
      base64textString: reader.result,
      imageName: image.name,
      showImage: true,
    });
  };

  reader.onerror = (error) => {
    console.log('Error: ', error);
  };

  console.log("reader: ", reader)
  console.log("reader.readyState: ", reader.readyState)
  console.log("reader.result: ", reader.result)


  if(name!=="" && image!=="" && category!=="" && type!=="" && rooms!=="" && bathrooms!=="" && garages!=="" && area!=="" && value!=="" && description!=="" && city!=="" && neighborhood!=="" && stratum!=="" && status!=="") { 
    createFlag = true; 
  }

  if(200 <= responseStatus && responseStatus <= 299){
    setResponseStatus(0);
    Swal.fire({
      title: "La Inmobiliaria",
      text: "Inmueble creado con éxito",
      icon: "success",
      confirmButtonColor: myColor,
    });
    setImage("");
    setName("");
    setCategory("");
    setType("");
    setCharacteristic("");
    setRooms("");
    setBathooms("");
    setGarages("");
    setArea("");
    setValue("");
    setDescription("");
    setCity("");
    setState("");
    setCountry("");
    setNeighborhood("");
    setStratum("");
    setStatus("");
    setImages("");
  } else if(400 <= responseStatus && responseStatus <= 499){
    setResponseStatus(0);
    Swal.fire({
      title: "La Inmobiliaria",
      text: "Inmueble no creado",
      icon: "error",
      confirmButtonColor: myColor,
    });
  } else if(500 <= responseStatus && responseStatus <= 599){
    setResponseStatus(0);
    Swal.fire({
      title: "La Inmobiliaria",
      text: "Inmueble no creado",
      icon: "error",
      confirmButtonColor: myColor,
    });
  }

  return (
    <>
      <hr />
      <center><h5>Subir Inmueble</h5></center> 
      <hr />
      <center><HomeThumbnail color={'#aaaaaa'} height={2} width={2} /></center>
      <div className="container mt-3">
        <div className='row d-block d-sm-flex'>
          <div className="col my-2">
            <InputFile id={'image-primary'} placeholder={'Imagen'} multiple={false} acceptFiles={"image/*"} file={image} setFile={setImage} className="input form-control border-muted text-muted shadow-sm"/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Estado'} query={status} defaultSelect={'Disponible'} parameters={estados} setQuery={setStatus} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Tipo negocio'} query={type} parameters={tipos.slice(1,tipos.length)} setQuery={setType} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Categoría'} query={category} parameters={categorias.slice(1,categorias.length)} setQuery={setCategory} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
          <div className='col my-2'>
            <Dropdown placeholder={'Características'} query={characteristic} parameters={caracteristicas} setQuery={setCharacteristics} className={"input form-control rounded border-muted border-1 text-muted shadow-sm"}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <InputText id={'nombre'} placeholder={'Nombre'} inputText={name} onInputChange={(values) => setName(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
          <div className='col col-sm-3 my-2'>
            <InputText id={'sector'} placeholder={'Sector'} inputText={neighborhood} onInputChange={(values) => setNeighborhood(values.target.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row d-block d-sm-flex'>
          <div className='col my-2'>
            <CountriesBar parameters={paises} country={country} setCountry={setCountry} state={state} setState={setState} city={city} setCity={setCity} />
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
          <div className='col my-2'>
            <InputNumber prefix={'$ '} placeholder={'Valor'} id={'valor'} value={value} onInputChange={(values) => setValue(values.value)} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className='col my-0 my-sm-2'>
            <InputTextArea id={'descripcion'} placeholder={'Descripción'} inputText={description} onInputChange={(values) => setDescription(values.target.value)} rows={3} className={'input form-control rounded border-muted border-1 align-bottom text-muted text-center px-2 pt-4 pb-5 h-auto shadow-sm w-100'}/>
          </div>
        </div>
        <div className='row'>
          <div className="col my-2">
            <InputFile id={'images-secondary'} placeholder={'Imágenes'} multiple={true} acceptFiles={"image/*"} file={images} setFile={setImages} className="input form-control border-muted text-muted shadow-sm"/>
          </div>
        </div>
        <div className='row'>
          <div className="col my-2">
            <ButtonFetch icon={<HomeThumbnail color={'#ffffff'} height={1.5} width={1.5} />} title={'Crear'} urlApi={urlApiInmuebles} contenidoApi={JSON.stringify(dataInmueble)} setResponseStatus={setResponseStatus} createFlag={createFlag} className='bg-main-color' ></ButtonFetch>
          </div>
        </div>
      </div>
    </>
  )
}
