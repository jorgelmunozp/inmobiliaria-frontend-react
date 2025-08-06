export const InputText = ({ id,placeholder,inputText,onInputChange,className }) => {
    return (
        <>
            <div className="form-floating text-center text-nowrap text-truncate shadow-sm" data-mdb-input-init>
                <input value={ inputText } onChange={ (target) => onInputChange(target) } 
                    type="search" placeholder={ placeholder } id={ id } 
                    className={ className + " text-nowrap text-truncate" } autoComplete="off" />
                <label htmlFor={ id } className="form-label text-muted text-nowrap text-truncate" >{ placeholder }</label>
            </div>
        </>
    )
}
export default InputText;