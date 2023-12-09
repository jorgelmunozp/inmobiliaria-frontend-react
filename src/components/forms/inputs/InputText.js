export const InputText = ({ searchText,handleInputSearch }) => {
    return (
        <>
            <input placeholder='Nombre inmueble' 
                    value={ searchText }  onInput={ handleInputSearch }
                    type='search' id='searchText' name='searchText' autoComplete='off' 
                    className='input form-control rounded border-secondary text-muted text-center py-1' 
            />
        </>
    )
}