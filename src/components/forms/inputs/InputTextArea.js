export const InputTextArea = ({ id,placeholder,inputText,onInputChange,rows=1,className }) => {
    return (
        <>
            <div className="form-floating text-center text-nowrap text-truncate shadow-sm" data-mdb-input-init>
                <textarea value={ inputText } onChange={ (target) => onInputChange(target) } 
                    type="search" placeholder={ placeholder } id={ id } 
                    className={ className } autoComplete="off" rows={rows} />
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
            </div>
        </>
    )
}