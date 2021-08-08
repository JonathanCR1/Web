import React, {useState} from 'react'

export const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19)

    const aumentar = () =>{
        setTemperatura(temperatura+1)
    }
    const reducir = () =>{
        setTemperatura(temperatura-1)
    }

    return (
        <div className="container">
            <h2>Temperatura : {temperatura}</h2>
            <p>{temperatura >= 21 ? 'Hace calor':'Hace frio'}</p>
            <button className="btn btn-success btn-block" onClick={aumentar}>Aumentar Temperatura</button>
            <button className="btn btn-success btn-block" onClick={reducir}>Reducir Temperatura</button>
        </div>
    )
}
