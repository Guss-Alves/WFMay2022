import React, {useState} from "react";

const Form = ()=>{

    let [color,setColor] = useState("");
    let [width,setWidth] = useState("");
    let [height,setHeight] = useState("");

    let [listOfBoxes,setListOfBoxes] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        e.target.reset()
        
        let boxObj = {color, width, height}
        
        setListOfBoxes([...listOfBoxes,boxObj]);
    }

    return(
        <>
            <h1>Box generator form</h1>
            <form onSubmit={submitHandler} className="mt-4">
                <div>
                    <label className="me-3">Color:</label>
                    <input onChange={(e)=>setColor(e.target.value)} className="d-inline" type="text"/>
                </div>
                <div>
                    <label className="me-3">Width:</label>
                    <input onChange={(e)=>setWidth(e.target.value)} type="number"/>
                </div>
                <div>
                    <label className="me-3">Height:</label>
                    <input onChange={(e)=>setHeight(e.target.value)} type="number"/>
                </div>
                <input type="submit" value="Add" className="btn btn-outline-success mt-3 "/>
            </form>
            <hr/>
            <div className="box-container">
                {
                    listOfBoxes.map((item, index)=>{
                        return(
                            <div className="box" key={index} style={{backgroundColor: item.color, width: `${item.width}px` , height: `${item.height}px`}}></div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form;