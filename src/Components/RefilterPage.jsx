import React from 'react'
import { useNavigate } from 'react-router-dom';

const RefilterPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            Rezultate Refiltrate dupa orase
            <button onClick = {() => navigate("/")} >Restart</button>
        </div>
    )
}

export default RefilterPage;
