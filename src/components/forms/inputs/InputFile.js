import { useState } from 'react';
import { ImageSearch } from '../../icons/image/ImageSearch';

export const InputFile = ({ id,placeholder,acceptFiles='*',file,setFile,iconSize=1,iconStrokeWidth=1,multiple=false,className }) => {
    const size = iconSize;
    const [imageData, setImageData] = useState({ data: '' });               // Convert image -> image base 64
    const [imagesData, setImagesData] = useState([]);               // Convert image -> image base 64

    if ( file.size ) { 
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => { setImageData({ data: reader.result }); };
        // reader.onerror = (error) => { console.log('Error input file img -> img base 64: ', error); };
    }
    if ( file.length ) {
        const arrayimages = [{}];

        for(let i = 0; i < file.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(file[i])
            reader.onload = () => { arrayimages[i] = { data: reader.result }; setImagesData(arrayimages); };
            // reader.onerror = (error) => { console.log('Error input file img -> img base 64: ', error); };
        }
    }

    // console.log("imageData: ",imageData)
    console.log("imagesData: ",imagesData)

    return (
        <div className={"form-floating text-center"} data-mdb-input-init>
            <div id='inputFile' className={className + ' image-upload img-thumbnail py-1 h-100'}>
                <label htmlFor={ id } style={{"cursor":"pointer"}} >
                    { 
                        ( file.size ) 
                            ?   <img src={imageData.data} style={{"height": size + "rem","width": size + "rem"}}/>
                            :   ( file.length )
                                    ?   imagesData.map((image) => { 
                                            return(<img src={image.data} key={image.name} style={{"height": size + "rem","width": size + "rem"}}/>)
                                        })
                                    :  <ImageSearch color={'#aaaaaa'} strokeWidth={iconStrokeWidth} height={size} width={size} />
                    }
                </label>
                <input type="file" id={ id } accept={ acceptFiles } onChange={() => setFile( multiple ? document.getElementById( id ).files : document.getElementById( id ).files[0]) } multiple={ multiple } />
            </div>
            <label htmlFor='inputFile' className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
        </div>
    )
}