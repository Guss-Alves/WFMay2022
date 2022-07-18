// import logo from "./logo.svg";
import React from "react";
import { useParams } from 'react-router';
import "./App.css";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const Home = (props)=>{
    return(
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

const Word = (props)=>{
    const {sum,color1, color2} = useParams()
    
    return(
        <div>
            {
                isNaN(sum)? <h1 style={{color: color1, backgroundColor: color2}} >The word is : {sum}</h1> : <h1 style={{color: color1, backgroundColor: color2}} >The number is : {sum}</h1>
            }
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/home" element={<Home/>}></Route>
                <Route path="/:sum" element={<Word/>}></Route>
                <Route path="/:sum/:color1/:color2" element={<Word/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
