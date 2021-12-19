import React from 'react'
import { useNavigate } from 'react-router';

const StartPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            Start page
            <button onClick = {() => navigate("/quiz")} >Start</button>
        </div>
    )
}

export default StartPage;
