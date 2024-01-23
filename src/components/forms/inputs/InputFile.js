import { useState, useEffect } from 'react';
import { ImageSearch } from '../../icons/image/ImageSearch';

export const InputFile = ({ id,placeholder,acceptFiles='*',file,setFile,iconSize=1,iconStrokeWidth=1,multiple=false,className }) => {
    const size = iconSize;
    const [imageData, setImageData] = useState({ data: '' });           // Convert image -> image base 64
    const [imagesData, setImagesData] = useState([]);                   // Convert image -> image base 64

    if ( file.size > 0 ) { 
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => { setImageData({ data: reader.result }); };
        reader.onerror = (error) => { console.log('Error input file img -> img base 64: ', error); };
    }
    useEffect(() => { 
        if ( file.length > 0 ) {
            const arrayimages = [{data: ''}];
            for(let i = 0; i < file.length; i++) {
                const readerMultiple = new FileReader();
                readerMultiple.readAsDataURL(file[i])
                readerMultiple.onload = () => { arrayimages[i] = { data: readerMultiple.result }; setImagesData(arrayimages); };
                readerMultiple.onerror = (error) => { console.log('Error input file img -> img base 64: ', error); };
            }
        }
    },[file.length]);

    return (
        <div className="form-floating text-center text-nowrap text-truncate shadow-sm" data-mdb-input-init>
            <div id='inputFile' className={className + ' image-upload img-thumbnail py-1 py-md-1 py-sm-5 h-100'}>
                <label htmlFor={ id } style={{"cursor":"pointer"}} >
                    { 
                        ( file.size > 0 ) 
                            ?   <img src={imageData.data} id={ 'imgXXX-' + id }  className='img-thumbnail shadow-sm' style={{"height": size + "rem","width": size + "rem"}}/>
                            :   ( file.length > 0 )
                                    ?   imagesData.map((image) => { 
                                            return(<img src={image.data} key={image.name} className='img-thumbnail shadow-sm' style={{"height": size + "rem","width": size + "rem"}}/>)
                                        })
                                    :  <ImageSearch color={'#aaaaaa'} strokeWidth={iconStrokeWidth} height={size} width={size} className='mt-1 mt-md-1 mt-sm-5 mb-md-0 mb-sm-2' />
                    }
                </label>
                <input type="file" id={ id } accept={ acceptFiles } onChange={() => setFile( multiple ? document.getElementById( id ).files : document.getElementById( id ).files[0]) } multiple={ multiple } />
            </div>
            <label htmlFor='inputFile' className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
        </div>
    )
}