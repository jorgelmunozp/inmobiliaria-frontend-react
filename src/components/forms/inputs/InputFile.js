export const InputFile = ({ id,placeholder,acceptFiles='*',setFile,className }) => {
    return (
        <>
            <div className="form-floating text-center" data-mdb-input-init>
                {/* <input value={ inputText } onChange={ (target) => onInputChange(target) } 
                    type="search" placeholder={ placeholder } id={ id } 
                    className={ className } autoComplete="off" />
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label> */}

                {/* <input className="form-control" type="file" id={ id } accept="image/*" onChange={() => setImage(document.getElementById(id).files[0]) }/> */}
                <input type="file" id={ id } accept={ acceptFiles } className={ className } 
                       onChange={() => setFile(document.getElementById(id).files[0]) }/>
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>

            </div>
        </>
    )
}