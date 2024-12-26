const addToLocalStorage = () => {
    const idInput = document.querySelector('#storage-id');
    const id = idInput.value
    const valueInput = document.querySelector('#storage-value');
    const value = valueInput.value

    // add to local storage
    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}