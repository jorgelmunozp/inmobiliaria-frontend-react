import { useState } from 'react';
import { ImageSearch } from '../../icons/image/ImageSearch';

export const InputFile = ({ id,placeholder,acceptFiles='*',file,setFile,iconSize=1,iconStrokeWidth=1,multiple=false,className }) => {
    const size = iconSize;

    const [imageData, setImageData] = useState({ data: '' });               // Convert image -> image base 64
    const reader = new FileReader();
    if ( file.length !== 0 ) { reader.readAsDataURL(file) }
    reader.onload = () => { setImageData({ data: reader.result }); };
    reader.onerror = (error) => { console.log('Error input file img -> img base 64: ', error); };

    return (
        <div className={"form-floating text-center"} data-mdb-input-init>
            <div id='inputFile' className={className + ' image-upload img-thumbnail py-1 h-100'}>
                <label htmlFor={ id } style={{"cursor":"pointer"}} >{ file.length !== 0 ? <img src={imageData.data} style={{"height": size + "rem","width": size + "rem"}}/> : <ImageSearch color={'#aaaaaa'} strokeWidth={iconStrokeWidth} height={size} width={size} />}</label>
                <input type="file" id={ id } accept={ acceptFiles } onChange={() => setFile(document.getElementById( id ).files[0]) } multiple={ multiple } />
            </div>
            <label htmlFor='inputFile' className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
        </div>
    )
}