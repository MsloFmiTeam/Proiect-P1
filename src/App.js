import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// Components
import StartPage from "./Components/StartPage";
import Quiz from "./Components/Quiz";
import Results from "./Components/ResultsPage";
import RefilterPage from "./Components/RefilterPage";
import ListaUniversitati from "./Components/ListaUniversitati";

const baseURL = "http://localhost:8000/posts";

const App = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(baseURL)
             .then(res => setData(res.data))
             .catch("Couldn't get data")
    },[])
    console.log(data)
    return (
        <div>
            
            <Router>
                <Routes>
                    <Route path = "/" element = { <StartPage/>}></Route>
                        <Route path = "/quiz" element = {<Quiz/>}></Route>
                        <Route path = "/results" element = {<Results/>}></Route>
                    <Route path = "/refilter" element = {<RefilterPage/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

