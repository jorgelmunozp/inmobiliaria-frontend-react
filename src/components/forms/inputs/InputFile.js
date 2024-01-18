import { ImageSearch } from '../../icons/image/ImageSearch';

export const InputFile = ({ id,placeholder,acceptFiles='*',file,setFile,className }) => {
    console.log("file: ",file)
    return (
        <div className={"form-floating text-center"} data-mdb-input-init>
            <div id='input' className={className + ' image-upload img-thumbnail py-3'}>
                <label htmlFor={ id } style={{"cursor":"pointer"}} ><ImageSearch color={'#aaaaaa'} strokeWidth={1.75} height={1.25} width={1.25} /></label>
                <input type="file" id={ id } accept={ acceptFiles } onChange={() => setFile(document.getElementById( id ).files[0]) } />
                <label className='text-muted ms-2'>{file.name}</label>
            </div>
            <label htmlFor='input' className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
        </div>
    )
}