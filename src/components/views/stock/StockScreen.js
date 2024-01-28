import React, { useMemo, useState } from 'react';
import { fetchUpdate } from '../../../helpers/fetchUpdate';
import { InputNumber} from '../../forms/inputs/InputNumber';
import { InputText } from '../../forms/inputs/InputText';
import { getInmuebleById } from '../../../selectors/getInmuebleById';
import { getInmueblesByName} from '../../../selectors/getInmueblesByName';
import { PaginationBar } from '../../bars/pagination/PaginationBar';
import { Arrows } from '../../forms/arrows/Arrows';
import { Area } from '../../icons/area/Area';
import { Bath } from '../../icons/bath/Bath';
import { Bed } from '../../icons/bed/Bed';
import { Camera } from '../../icons/camera/Camera';
import { Car } from '../../icons/car/Car';
import { Category } from '../../icons/category/Category';
import { HomeWarehouse } from '../../icons/home/HomeWarehouse';
import { Description } from '../../icons/description/Description';
import { Home } from '../../icons/home/Home';
import { HomeDollar } from '../../icons/home/HomeDollar';
import { ImageSearch } from '../../icons/image/ImageSearch';
import { LocationArrow } from '../../icons/location/LocationArrow';
import { MapLocation } from '../../icons/map/MapLocation';
import { MapPin } from '../../icons/map/MapPin';
import { Type } from '../../icons/type/Type';
import { HomeQuestion } from '../../icons/home/HomeQuestion';
import { Image } from '../../icons/image/Image';

export const StockScreen = ({ inmuebles,urlApiInmuebles }) => {
  const iconSize = 1.5;

  /* Update Stock */
  let [ id, setId ] = useState('');
  let [ image, setImage ] = useState('');
  let [ name, setName ] = useState("");
  let [ category, setCategory ] = useState("");
  let [ type, setType ] = useState("");
  let [ rooms, setRooms ] = useState("");
  let [ bathrooms, setBathooms ] = useState("");
  let [ garages , setGarages ] = useState("");
  let [ area, setArea ] = useState("");
  let [ value, setValue ] = useState("");
  let [ description, setDescription ] = useState("");
  let [ city, setCity ] = useState(""); 
  let [ state, setState ] = useState(""); 
  let [ country, setCountry ] = useState(""); 
  let [ neighborhood, setNeighborhood ] = useState("");
  let [ stratum, setStratum ] = useState("");
  let [ status, setStatus ] = useState("");
  let [ images, setImages ] = useState([]); 

  const [ queryId , setQueryId ] = useState("");                        // Query
  const [ queryName , setQueryName ] = useState("");
  const [ sortBy, setSortBy ] = useState(0);                            // Sort By
  const [ itemPerPage, setItemPerPage ] = useState(10);                 // Pagination - items per page
  const [ indexPage, setIndexPage ] = useState([0,itemPerPage]);        // Pagination indexes for Slice(x,y) filter that returns a items range from x to y

  let [imageData, setImageData] = useState({                            // Input main image file
    name: '',
    data: ''
  });
  let [imagesData, setImagesData] = useState([{                      // Input secondary images files
    name: '',
    data: ''
  }]);

  /* Query */
  let inmueblesFiltered = [];
  const inmueblesFilteredById = useMemo( () => getInmuebleById(queryId,inmuebles), [queryId,inmuebles] );
  const inmueblesFilteredByName = useMemo( () => getInmueblesByName(queryName,inmuebles), [queryName,inmuebles] );
  if ( queryId !== "" ) {inmueblesFiltered = [inmueblesFilteredById]; } 
  else if ( queryName !== "" ) { inmueblesFiltered = inmueblesFilteredByName; }

  /* Pagination */
  const numPages = ((queryId === '' && queryName === '') ? Math.floor(inmuebles.length/itemPerPage) : Math.floor(inmueblesFiltered.length/itemPerPage));                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  const resPages = ((queryId === '' && queryName === '') ? inmuebles.length%itemPerPage : inmueblesFiltered.length%itemPerPage);                   // Se calcula la cantidad de páginas = cantidad de items/item por página
  let indexPages = [];
  let activePage = [true];                                            // [true]
  if(resPages !== 0 ){
    for(let i = 0; i <= numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  } else if(resPages === 0 ){
    for(let i = 0; i < numPages; i++) { 
      indexPages.push(i);                                             // [0,1,2,3]
      if(i < 0) { activePage.push(false); }                           // [true,false,false,false]
    }
  }
  const [activePages, setActivePages] = useState(activePage);         // [true,false,false,false]

  /* Sort */
  function sortByIdUp(a, b) { return a.id - b.id; }
  function sortByIdDown(a, b) { return b.id - a.id; }
  function sortByNameUp(a, b) { return a.detalle.nombre.localeCompare(b.detalle.nombre); }
  function sortByNameDown(a, b) { return b.detalle.nombre.localeCompare(a.detalle.nombre); }
  function sortByCategoryUp(a, b) { return a.detalle.categoria.localeCompare(b.detalle.categoria); }
  function sortByCategoryDown(a, b) { return b.detalle.categoria.localeCompare(a.detalle.categoria); }
  function sortByTypeUp(a, b) { return a.detalle.tipo.localeCompare(b.detalle.tipo); }
  function sortByTypeDown(a, b) { return b.detalle.tipo.localeCompare(a.detalle.tipo); }
  function sortByRoomsUp(a, b) { return a.detalle.habitaciones.localeCompare(b.detalle.habitaciones); }
  function sortByRoomsDown(a, b) { return b.detalle.habitaciones.localeCompare(a.detalle.habitaciones); }
  function sortByBathroomsUp(a, b) { return a.detalle.baños.localeCompare(b.detalle.baños); }
  function sortByBathroomsDown(a, b) { return b.detalle.baños.localeCompare(a.detalle.baños); }
  function sortByGaragesUp(a, b) { return a.detalle.parqueaderos.localeCompare(b.detalle.parqueaderos); }
  function sortByGaragesDown(a, b) { return b.detalle.parqueaderos.localeCompare(a.detalle.parqueaderos); }
  function sortByAreaUp(a, b) { return a.detalle.area.localeCompare(b.detalle.area); }
  function sortByAreaDown(a, b) { return b.detalle.area.localeCompare(a.detalle.area); }
  function sortByValueUp(a, b) { return a.detalle.valor.localeCompare(b.detalle.valor); }
  function sortByValueDown(a, b) { return b.detalle.valor.localeCompare(a.detalle.valor); }
  function sortByDescriptionUp(a, b) { return a.detalle.descripcion.localeCompare(b.detalle.descripcion); }
  function sortByDescriptionDown(a, b) { return b.detalle.descripcion.localeCompare(a.detalle.descripcion); }
  function sortByCityUp(a, b) { return a.detalle.ciudad.localeCompare(b.detalle.ciudad); }
  function sortByCityDown(a, b) { return b.detalle.ciudad.localeCompare(a.detalle.ciudad); }
  function sortByNeighborhoodUp(a, b) { return a.detalle.sector.localeCompare(b.detalle.sector); }
  function sortByNeighborhoodDown(a, b) { return b.detalle.sector.localeCompare(a.detalle.sector); }
  function sortByStratumUp(a, b) { return a.detalle.estrato.localeCompare(b.detalle.estrato); }
  function sortByStratumDown(a, b) { return b.detalle.estrato.localeCompare(a.detalle.estrato); }
  function sortByStatusUp(a, b) { return a.detalle.estado.localeCompare(b.detalle.estado); }
  function sortByStatusDown(a, b) { return b.detalle.estado.localeCompare(a.detalle.estado); }
    
  const handleChangeImage = (event) => {
    const idInmueble = event.target.id.split('-')[1];
    image = document.getElementById( 'inputImage-' + event.target.id.split('-')[1] ).files[0];
    category = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.categoria;
    name = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.nombre;
    type = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.tipo;
    rooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.habitaciones;
    bathrooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.baños;
    garages  = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.parqueaderos;
    area = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.area;
    value = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.valor;
    description = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.descripcion;
    city = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.ciudad; 
    state = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.departamento; 
    country = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.pais; 
    neighborhood = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.sector;
    stratum = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estrato;
    status = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estado;
    imagesData = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.images;
    setImage(image);
    setCategory(category);
    setName(name);
    setType(type);
    setRooms(rooms);
    setBathooms(bathrooms);
    setGarages(garages);
    setArea(area);
    setValue(value);
    setDescription(description);
    setCity(city); 
    setState(state); 
    setCountry(country); 
    setNeighborhood(neighborhood);
    setStratum(stratum);
    setStatus(status);
    setImages(images);
    setImagesData(imagesData);

    // Convert image -> image base 64
    const reader = new FileReader();
    if (image) { reader.readAsDataURL(image) }
    reader.onload = () => {
      reader.onloadend = () => {
        id = event.target.id;
        setId(id);

        imageData = {
          name: category.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "-" + name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-') + "-0." + image.name.split('.')[1],
          data: reader.result
        };
        setImageData( imageData );
        // handleStock(idInmueble);
      }
    };
    reader.onerror = (error) => { console.log('Error img -> img base 64: ', error); };
  };

  const handleChangeImages = (event) => {
    const idInmueble = event.target.parentElement.parentElement.parentElement.parentNode.firstChild.id;
    imageData = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.imagen;
    category = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.categoria;
    name = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.nombre;
    type = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.tipo;
    rooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.habitaciones;
    bathrooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.baños;
    garages  = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.parqueaderos;
    area = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.area;
    value = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.valor;
    description = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.descripcion;
    city = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.ciudad; 
    state = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.departamento; 
    country = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.pais; 
    neighborhood = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.sector;
    stratum = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estrato;
    status = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estado;
    images = document.getElementById( 'inputImages-' + event.target.id.split('-')[1] ).files[0];
    imagesData = inmuebles.filter(inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.images;
    setImageData(imageData);
    setCategory(category);
    setName(name);
    setType(type);
    setRooms(rooms);
    setBathooms(bathrooms);
    setGarages(garages);
    setArea(area);
    setValue(value);
    setDescription(description);
    setCity(city); 
    setState(state); 
    setCountry(country); 
    setNeighborhood(neighborhood);
    setStratum(stratum);
    setStatus(status);
    setImages(images);
    setImagesData(imagesData);

    // Convert images -> images base 64
    const readerMultiple = new FileReader();
    if (images) { readerMultiple.readAsDataURL(images); }
    readerMultiple.onload = () => {
      readerMultiple.onloadend = () => {
        id = event.target.id.split('-')[1];
        setId(id);

        imagesData[id-1] = { 
          name: category.toLocaleLowerCase() + "-" + name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-') + "-" + id + "." + images.name.split('.')[1],
          data: readerMultiple.result 
        };
        setImagesData(imagesData);
        // handleStock(idInmueble);
      }
    };
    readerMultiple.onerror = (error) => { console.log('Error img -> img base 64: ', error); };
  };

  const handleChangeImagesAll = (event) => { 
    const idInmueble = event.target.parentElement.parentElement.parentElement.parentNode.firstChild.id;
    imageData = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.imagen;
    category = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.categoria;
    name = inmuebles.filter( inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.nombre;
    type = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.tipo;
    rooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.habitaciones;
    bathrooms = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.baños;
    garages  = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.parqueaderos;
    area = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.area;
    value = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.valor;
    description = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.descripcion;
    city = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.ciudad; 
    state = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.departamento; 
    country = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.pais; 
    neighborhood = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.sector;
    stratum = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estrato;
    status = inmuebles.filter(inmueble => inmueble.id === parseInt(event.target.id.split('-')[1]) )[0].detalle.estado;
    images = [ document.getElementById( 'inputImagesAll-' + idInmueble ).files ];
    imagesData = inmuebles.filter(inmueble => inmueble.id === parseInt(idInmueble) )[0].detalle.images;
    setImageData(imageData);
    setCategory(category);
    setName(name);
    setType(type);
    setRooms(rooms);
    setBathooms(bathrooms);
    setGarages(garages);
    setArea(area);
    setValue(value);
    setDescription(description);
    setCity(city); 
    setState(state); 
    setCountry(country); 
    setNeighborhood(neighborhood);
    setStratum(stratum);
    setStatus(status);
    setImages(images);
    setImagesData(imagesData);

    const imagesDataLength = imagesData.length;  
    let counter = 0;
    
    // Convert images -> images base 64
    if (images) {
      for(let i = 0; i < images[0].length; i++) {
        const readerMultipleAll = new FileReader();
        readerMultipleAll.readAsDataURL(images[0][i]);
        readerMultipleAll.onload = () => {
          readerMultipleAll.onloadend = () => {
            id = event.target.id;
            setId(id);

            imagesData[ imagesDataLength + i ] = { 
              name: category.toLocaleLowerCase() + "-" + name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-') + "-" + ( imagesDataLength + 1 + i ) + "." + images[0][i].name.split('.')[1],
              data: readerMultipleAll.result 
            };
            counter ++;
            if( counter === images[0].length ) {
              setImagesData(imagesData);
              // handleStock(idInmueble);
            }
          }
        };
        readerMultipleAll.onerror = (error) => { console.log('Error img -> img base 64: ', error); };

      }
    };
  };

  const handleChangeName = (event) => { setName(event.target.value); handleStock(event.target.id.split('-')[1]); };
  const handleChangeCategory = (event) => { setCategory(event.target.value); handleStock(event.target.id.split('-')[1]); };
  const handleChangeType = (event) => { setType(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeRooms = (event) => { setRooms(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeBathrooms = (event) => { setBathooms(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeGarage = (event) => { setGarages(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeArea = (event) => { setArea(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeValue = (event) => { setValue(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeDescription = (event) => { setDescription(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeCity = (event) => { setCity(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeState = (event) => { setState(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeCountry = (event) => { setCountry(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeNeighborhood = (event) => { setNeighborhood(event.target.value); handleStock(event.target.id.split('-')[1]); }
  const handleChangeStratum = (event) => { setStratum(event.target.value); handleStock(event.target.id.split('-')[1]);}
  const handleChangeStatus = (event) => { setStatus(event.target.value); handleStock(event.target.id.split('-')[1]);}

  const handleStock = ( id ) => {   
    const contenidoInmueble = `{
      "detalle": {
        "nombre": "${ name }",
        "imagen": ${ JSON.stringify(imageData) },
        "categoria": "${ category}",
        "tipo": "${ type }",
        "habitaciones": "${ rooms }",
        "baños": "${ bathrooms }",
        "parqueaderos": "${ garages }",
        "area": "${ area }",
        "valor": "${ value }",
        "descripcion": "${ description }",
        "ciudad": "${ city }",
        "departamento": "${ state }",
        "pais": "${ country }",
        "sector": "${ neighborhood }",
        "estrato": "${stratum }",
        "estado": "${ status }",
        "images": ${ JSON.stringify(imagesData) }
      },
      "id": ${id}
    }`;

    fetchUpdate(urlApiInmuebles,JSON.stringify(contenidoInmueble),id);
  };

  return (
    <>
      <hr />
      <center><h5>Inventario Inmuebles</h5></center> 
      <hr />
      <p>
        <a className="form-control border border-muted text-center shadow-sm w-100" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
          🔎
        </a>
      </p>
      <div className="collapse mb-3" id="collapseContent">
        <div className="card card-body">
          <div className='row d-block d-sm-flex'>
            <div className='col'>
              <InputNumber id={'query-id'} placeholder={'Código Inmueble'} value={queryId} onInputChange={(values) => setQueryId(values.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
            </div>
            <div className='col'>
              <InputText id={'query-name'} placeholder={'Nombre Inmueble'} value={queryName} onInputChange={(target) => setQueryName(target.target.value)} className='input form-control rounded border-muted px-2 py-2 text-center shadow-sm' fullWidth margin="dense" />
            </div>
          </div>
        </div>
      </div>
      <div className='stock overflow-scroll'>
        <div className='row flex-nowrap'>
          <span className='col-4 col-sm-2 border text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><HomeWarehouse strokeWidth={2} width={iconSize - 0.15} height={iconSize - 0.15}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(1)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(2)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-auto px-2 border border-light text-center bg-main-transparent-color align-self-center py-2'><Image strokeWidth={2} width={iconSize + 0.15} height={iconSize + 0.15}/></span>
          <span className='col-7 col-md-3 col-sm-5 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Home strokeWidth={1} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(3)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(4)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Category strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(5)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(6)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Type strokeWidth={0} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(7)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(8)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-3 col-md-1 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Bed strokeWidth={40} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(9)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(10)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-3 col-md-1 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Bath strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(11)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(12)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-3 col-md-1 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Car strokeWidth={40} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(13)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(14)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-4 col-md-1 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Area strokeWidth={1} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(15)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(16)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-md-1 col-sm-2 align-self-center'><HomeDollar strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(17)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(18)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-12 col-md-7 col-sm-9 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><Description strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(19)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(20)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapLocation strokeWidth={2.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(21)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(22)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapLocation strokeWidth={2.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(21)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(22)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapLocation strokeWidth={2.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(21)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(22)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-6 col-md-2 col-sm-4 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><MapPin strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(23)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(24)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-4 col-md-1 col-sm-2 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><LocationArrow strokeWidth={0.25} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(25)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(26)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-5 col-md-2 col-sm-3 border border-light text-center bg-main-transparent-color'><div className='row justify-content-center'><div className='col-3 col-sm-1 align-self-center'><HomeQuestion strokeWidth={2} width={iconSize} height={iconSize}/></div><div className='col-2'><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(27)}><Arrows direction={"up"}/></button></div><div className='row lh-1'><button className='border-0 bg-transparent dark-color-hover main-color fs-5 pt-0 pb-0 px-0 ms-2 ms-sm-3' onClick={()=>setSortBy(28)}><Arrows direction={"down"}/></button></div></div></div></span>
          <span className='col-12 col-sm-6 border border-light text-center bg-main-transparent-color align-self-center py-2'><Camera strokeWidth={40} width={iconSize + 0.1} height={iconSize + 0.1}/></span>
        </div>
        {
          ((queryId === '' && queryName === '') ? inmuebles : inmueblesFiltered).sort(
              sortBy === 1 ? sortByIdUp 
                : ( sortBy === 2 ? sortByIdDown 
                  : ( sortBy === 3 ? sortByNameUp 
                    : ( sortBy === 4 ? sortByNameDown 
                      : ( sortBy === 5 ? sortByCategoryUp 
                        : ( sortBy === 6 ? sortByCategoryDown 
                          : ( sortBy === 7 ? sortByTypeUp 
                            : ( sortBy === 8 ? sortByTypeDown 
                              : ( sortBy === 9 ? sortByRoomsUp 
                                : ( sortBy === 10 ? sortByRoomsDown 
                                  : ( sortBy === 11 ? sortByBathroomsUp 
                                    : ( sortBy === 12 ? sortByBathroomsDown 
                                      : ( sortBy === 13 ? sortByGaragesUp 
                                        : ( sortBy === 14 ? sortByGaragesDown
                                          : ( sortBy === 15 ? sortByAreaUp 
                                            : ( sortBy === 16 ? sortByAreaDown
                                              : ( sortBy === 17 ? sortByValueUp 
                                                : ( sortBy === 18 ? sortByValueDown
                                                  : ( sortBy === 19 ? sortByDescriptionUp 
                                                    : ( sortBy === 20 ? sortByDescriptionDown  
                                                      : ( sortBy === 21 ? sortByCityUp 
                                                        : ( sortBy === 22 ? sortByCityDown
                                                          : ( sortBy === 23 ? sortByNeighborhoodUp 
                                                            : ( sortBy === 24 ? sortByNeighborhoodDown 
                                                              : ( sortBy === 25 ? sortByStratumUp 
                                                                : ( sortBy === 26 ? sortByStratumDown
                                                                  : ( sortBy === 27 ? sortByStatusUp 
                                                                    : ( sortBy === 28 ? sortByStatusDown
                                                                      : sortByIdUp
          )))))))))))))))))))))))))))).slice(indexPage[0],indexPage[1]).map(inmueble => (
            <div className='row flex-nowrap' key={inmueble.id}>
              <span id={ inmueble.id } key={ inmueble.id } className='col-4 col-sm-2 py-1 border text-center'> { inmueble.id } </span>
              <div key={ 'div-' + inmueble.id } className='image-upload col-auto px-1 border text-center'>
                  {
                    ( id.length === 0 )
                      ? <label htmlFor={ 'inputImage-' + inmueble.id }><img src={ inmueble.detalle.imagen.data } id={ "img-" + inmueble.id } key={ "img-" + inmueble.id } alt ="Foto" title ="Foto" className='rounded my-1 shadow-sm' /></label>
                      : ( inmueble.id === parseInt(id.split('-')[1]) )
                         ? <label htmlFor={ 'inputImage-' + inmueble.id }><img src={ imageData.data } id={ "img-" + inmueble.id } key={ "img-" + inmueble.id } alt ="Foto" title ="Foto" className='rounded my-1 shadow-sm' /></label>
                         : <label htmlFor={ 'inputImage-' + inmueble.id }><img src={ inmueble.detalle.imagen.data } id={ "img-" + inmueble.id } key={ "img-" + inmueble.id } alt ="Foto" title ="Foto" className='rounded my-1 shadow-sm' /></label>
                  }
                  <input type="file" id={'inputImage-' + inmueble.id } key={'inputImage-' + inmueble.id } onChange={ handleChangeImage } accept="image/*"/>
              </div>
              <input defaultValue={ inmueble.detalle.nombre } id={ 'name-' + inmueble.id } key={ 'name-' + inmueble.id } onChange={ handleChangeName } type='text' autoComplete='off' className='col-7 col-md-3 col-sm-5 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.categoria } id={ 'cat-' + inmueble.id } key={ 'cat-' + inmueble.id } onChange={ handleChangeCategory } type='text' autoComplete='off' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.tipo } id={ 'type-' + inmueble.id } key={ 'type-' + inmueble.id } onChange={ handleChangeType } type='text' autoComplete='off' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.habitaciones } id={ 'room-' + inmueble.id } key={ 'room-' + inmueble.id } onChange={ handleChangeRooms } type='number' className='col-3 col-md-1 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.baños } id={ 'bath-' + inmueble.id } key={ 'bath-' + inmueble.id } onChange={ handleChangeBathrooms} type='number' className='col-3 col-md-1 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.parqueaderos } id={ 'car-' + inmueble.id } key={ 'car-' + inmueble.id } onChange={ handleChangeGarage } type='number' className='col-3 col-md-1 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.area } id={ 'area-' + inmueble.id } key={ 'area-' + inmueble.id } onChange={ handleChangeArea } type='number' className='col-4 col-md-1 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.valor } id={ 'val-' + inmueble.id } key={ 'val-' + inmueble.id } onChange={ handleChangeValue } type='number' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.descripcion } id={ 'desc-' + inmueble.id } key={ 'desc-' + inmueble.id } onChange={ handleChangeDescription } type='textarea' autoComplete='off' className='col-12 col-md-7 col-sm-9 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.ciudad } id={ 'city-' + inmueble.id } key={ 'city-' + inmueble.id } onChange={ handleChangeCity } type='text' autoComplete='off' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.departamento } id={ 'state-' + inmueble.id } key={ 'state-' + inmueble.id } onChange={ handleChangeState } type='text' autoComplete='off' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.pais } id={ 'country-' + inmueble.id } key={ 'country-' + inmueble.id } onChange={ handleChangeCountry } type='text' autoComplete='off' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.sector } id={ 'zone-' + inmueble.id } key={ 'zone-' + inmueble.id } onChange={ handleChangeNeighborhood } type='text' autoComplete='off' className='col-6 col-md-2 col-sm-4 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estrato } id={ 'stra-' + inmueble.id } key={ 'stra-' + inmueble.id } onChange={ handleChangeStratum } type='number' className='col-4 col-md-1 col-sm-2 py-1 border text-center' />
              <input defaultValue={ inmueble.detalle.estado } id={ 'stat-' + inmueble.id } key={ 'stat-' + inmueble.id } onChange={ handleChangeStatus } type='text' className='col-5 col-md-2 col-sm-3 py-1 border text-center' />
              <div className='container col-12 col-md-6 col-sm-6'>
                <div key={image.name} className='row border text-center'>
                  <div key={image.name} className='image-upload col-auto px-1 text-center'>
                    <label htmlFor={'inputImagesAll-' + inmueble.id }><ImageSearch color={'#aaaaaa'} strokeWidth={1} height={2} width={2} className='input form-control mt-1 py-0 px-0 text-muted shadow-sm' /> </label>
                    <input type="file" id={'inputImagesAll-' + inmueble.id } key={'inputImagesAll-' + inmueble.id } onChange={ handleChangeImagesAll } accept="image/*" multiple={true} />
                  </div>
                  {
                    inmueble.detalle.images.map((image,index) => { return(
                      <div key={image.name} className='image-upload col-auto px-1 text-center'>
                        <label htmlFor={'inputImages-' + (index + 1) }><img src={ image.data } id={ "images-" + (index + 1) } key={ "images-" + (index + 1) } className='rounded my-1 shadow-sm' alt ="Foto" title ="Foto" /> </label>
                        <input type="file" id={'inputImages-' + (index + 1) } key={'inputImages-' + (index + 1) } onChange={ handleChangeImages } accept="image/*" multiple={false} />
                      </div>
                    )})
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <PaginationBar query={queryId === '' && queryName === ''} array={inmuebles} arrayFiltered={inmueblesFiltered} itemPerPage={itemPerPage} indexPage={indexPage} activePages={activePages} indexPages={indexPages} setIndexPage={setIndexPage} setActivePages={setActivePages} /> 
    </>
  )
}