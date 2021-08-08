import React, {Fragment, useState} from 'react'

export const List = () => {

    const numbers = useState([1,2,3,4,5,6])


    return (
        <Fragment>
            <ul>
                {
                    numbers.map( (item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        </Fragment>
    )
}
