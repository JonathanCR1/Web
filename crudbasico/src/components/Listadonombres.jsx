import React, {useState} from 'react'
import uniqid from 'uniqid'

export const Listadonombres = () => {

    const [nombre,setNombres] = useState('')
    const [listado,setLista] = useState([])
    const [modoEdicion,setModificacion] = useState(false)
    const [id,setId] = useState('')
    const [error,setError] = useState(null)

    const añadirNombre = (event) =>{
        event.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre esta vacio")
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            name:nombre
        }
        setLista([...listado,nuevoNombre])
        setNombres('')
        setError(null)

    }

    const deleteNombre = (id) =>{

        const newArray = listado.filter(item => item.id !== id)
        setLista(newArray)
    }

    const editar = (item) => {
        setModificacion(true)
        setNombres(item.name)
        setId(item.id)
    }
    const editarNombre = (event) => {
        event.preventDefault()
        const array = listado.map(item => item.id === id ? {id:id,name:nombre} : item)
        setLista(array)
        setModificacion(false)
    }

    return (
        <div>
            <h2>Aplicacion de CRUD basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    <ul className='list-group'>
                    {
                        listado.map(item =>
                            <li className='list-group-item' key='{item.id}'>{item.name}
                            <button className='btn btn-danger float-right' onClick={() => {deleteNombre(item.id)}}>Borrar</button>
                            <button className='btn btn-info float-right' onClick={() => {editar(item)}}>Editar</button>
                            </li>
                        )
                    }
                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form className='form-group' onSubmit={modoEdicion ? (e)=> editarNombre(e) : (e) => añadirNombre(e)}>
                        <input className='form-control mb-3' type="text" placeholder='Introduce el nombre' onChange={(e) => {setNombres(e.target.value)}} value={nombre}/>
                        <input className='btn btn-info btn-block' type="submit" value={modoEdicion ? 'Editar Nombre' : 'Registar Nombre'}/>
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">{error}</div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
