import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const Domenii = (props) => {
    return (
            <ul>
                {props.data.map(domeniu => <li key = {uuidv4()}>{domeniu}</li>)}
            </ul>
    )
}

export default Domenii;
