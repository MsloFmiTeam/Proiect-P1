import React from 'react'
import { useNavigate } from 'react-router-dom';

const Results = () => {
    let navigate = useNavigate()
    return (
        <div>
            Results Page
            <button onClick = {() => navigate("/refilter")} >Filtereaza dupa orase</button>
        </div>
    )
}

export default Results;