export const InputText = ({ placeholder,inputText,handleInput }) => {
    return (
        <>
            <input value={ inputText } onInput={ handleInput } placeholder={ placeholder }
                type='search' id='inputText' name='inputText' autoComplete='off' 
                className='input form-control rounded border-secondary text-muted text-center py-1' 
            />
        </>
    )
}