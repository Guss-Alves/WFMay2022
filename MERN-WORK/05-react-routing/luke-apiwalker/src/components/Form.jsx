import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = ()=>{

    let [category, setCategory] = useState("")
    let [id, setId] = useState("")
    
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log('hello')
        navigate(`/${category}/${id}`)
    }

    return(
        <>
            <form onSubmit={submitHandler} className="container">

                <label>Search for :</label>
                <select onChange={(e)=> setCategory(e.target.value)}>
                    <option disabled selected value></option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                </select>

                <label>ID :</label>
                <input onChange={(e)=>setId(e.target.value)}  className="number" type="number"/>
                
                <input type="submit" value="Search" />
            </form>
            <hr />
        </>
    )
}

export default Form;