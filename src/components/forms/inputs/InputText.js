export const InputText = ({ placeholder,inputText,handleInput }) => {
    return (
        <>
            <input placeholder={placeholder} 
                value={ inputText } onInput={ handleInput }
                type='search' id='inputText' name='inputText' autoComplete='off' 
                className='input form-control rounded border-secondary text-muted text-center py-1' 
            />
        </>
    )
}