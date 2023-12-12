export const InputText = ({ placeholder,inputText,handleInput,className }) => {
    return (
        <>
            <input  
                value={ inputText } onInput={ handleInput } placeholder={ placeholder }
                type='search' id='inputText' name='inputText' autoComplete='off' 
                className={ className } 
            />
        </>
    )
}