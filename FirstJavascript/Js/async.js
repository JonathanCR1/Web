/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respuesta => respuesta.json() )
    .then(json => console.log(json))
*/

const obtenerUsuario = async() => {
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos)
    }catch(e){
        console.log(e)
    }
}

obtenerUsuario()