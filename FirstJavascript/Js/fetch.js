fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respuesta => respuesta.json() )
    .then(json => console.log(json))
