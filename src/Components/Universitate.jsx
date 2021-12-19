import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Domenii from './Domenii';

const Universitate = (props) => {
    return (
        <li key = {props.universitate.Rank}>
            <p>__________________________________________</p>
            <p>Universitate: {props.universitate.Universitate}</p>
            <p>Rank: {props.universitate.Rank}</p>
            <p>Oras: {props.universitate.Oras}</p>
            <Domenii data = {props.universitate.Domenii}/>
            <p>__________________________________________</p>
        </li>
    )
}

export default Universitate;
