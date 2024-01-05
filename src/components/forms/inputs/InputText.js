export const InputText = ({ placeholder,inputText,onInputChange,className }) => {
    return (
        <>
            {/* <input  
                value={ inputText } onChange={ (target) => onInputChange(target) } 
                placeholder={ placeholder } className={ className }
                type='search' id='inputText' name='inputText' autoComplete='off' 
            /> */}
            <div className="form-floating text-center" data-mdb-input-init>
                <input value={ inputText } onChange={ (target) => onInputChange(target) } 
                       type="search" placeholder={ placeholder } id="formSearch" 
                       className={ className } />
                <label htmlFor="formSearch text-warning" className="form-label" >{ placeholder }</label>
            </div>
        </>
    )
}