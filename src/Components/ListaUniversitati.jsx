import React from 'react'

import Universitate from './Universitate'

const ListaUniversitati = (props) => {
    return (
        <ul>
            {props.data.map(universitate => <Universitate universitate = {universitate}/> )}
        </ul>
    )
}

export default ListaUniversitati
