import React, {useState, useEffect} from "react";
import axios from 'axios';

const Form = ()=>{

    let [list, setList] = useState([])
    
    useEffect(()=> {
        
        axios.get("https://swapi.dev/api/")
            .then(response =>{
                console.log('this is the API results ->', response)
                setList(Object.keys(response.data))
            })
            .catch( err =>{
                console.log('something went wrong ->', err)
            })
    }, []);


    return(
        <>
            <form className="container">
                <label>Search for :</label>
                <select onChange={(e)=>(e.target.value)}>
                    {
                        list.map((item, index)=>{
                            return(
                                <option key={index} value="{item}">{item}</option>
                            )
                        })
                    }
                </select>
                <label>ID :</label>
                <input className="number" type="number"/>
                <input type="submit" value="Search" />
            </form>
            <hr />
        </>
    )
}

export default Form;