export const InputTextArea = ({ id,placeholder,inputText,onInputChange,className }) => {
    return (
        <>
            <div className="form-floating text-center" data-mdb-input-init>
                <textarea value={ inputText } onChange={ (target) => onInputChange(target) } 
                    type="search" placeholder={ placeholder } id={ id } 
                    className={ className } autoComplete="off" rows={7} />
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
            </div>
        </>
    )
}