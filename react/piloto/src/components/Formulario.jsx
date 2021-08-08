import React, {useState} from 'react'

export const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const validar = (event) =>{
        event.preventDefault()
        if(!nombre.trim()){ //trim sirve para ver si esta vacio.
            console.log('nombre esta vacio')
            return
        }
        if(!edad.trim()){
            console.log('edad esta vacio')
            return
        }
    }



    return (
        <div>
            <form onSubmit={validar} className='form-group' action="">
                <input placeholder='Introduce el nombre' className='form-control mb-3' type="text" onChange={(e) => { setNombre(e.target.value) }} />
                <input placeholder='Introduce la edad' className='form-control mb-3' type="text" onChange={(e) => { setEdad(e.target.value) }}/>
                <input className='btn btn-info btn-block mb-3' type="submit" />
            </form>
        </div>
    )
}
