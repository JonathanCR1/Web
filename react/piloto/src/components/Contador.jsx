import React, {Fragment, useState} from 'react'

export const Contador = () => {

    const [number, setNumber] = useState(0)
    
    const aumentar = () =>{
        setNumber(number+1)
    }
    const reducir = () =>{
        setNumber(number-1)
    }
    return (
        <Fragment>
            <h2>Contador: {number}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={reducir}>Reducir</button>

        </Fragment>
    )
}
