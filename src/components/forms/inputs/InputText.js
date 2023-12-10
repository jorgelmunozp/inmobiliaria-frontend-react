export const InputText = ({ searchText,handleInputText }) => {
    return (
        <>
            <input placeholder='Nombre inmueble' 
                    value={ searchText }  onInput={ handleInputText }
                    type='search' id='searchText' name='searchText' autoComplete='off' 
                    className='input form-control rounded border-secondary text-muted text-center py-1' 
            />
        </>
    )
}