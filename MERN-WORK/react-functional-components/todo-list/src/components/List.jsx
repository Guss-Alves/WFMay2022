import React, {useState} from "react";

const List = ()=>{

    let [todo, setToDo] = useState("");
    let [boxcheck, setCheck] = useState(false)

    let [entirelist, setEntireList] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        e.target.reset();

        let listObj = {todo, boxcheck};

        setEntireList([...entirelist, listObj]);

    }

    const deleteItem = (e, index)=>{
        console.log('index at :', index );

        let filteredCopy = entirelist.filter((item, i)=>{
            return i != index
        })

        setEntireList(filteredCopy);
    }

    const check = (e, index)=>{
        let copyOfToDo = [...entirelist]
        
        copyOfToDo[index].boxcheck = e.target.checked

        setEntireList(copyOfToDo);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <h1>ToDo List</h1>
                <label ><strong>Things ToDo :</strong></label>
                <input onChange={(e)=>setToDo(e.target.value)} className=" form-control" type="text"/><br />
                <input type="submit" value="Add" className="btn btn-success btn-lg mt-1" />
            </form>
            <hr />
            <h1>Goals for Today:</h1>
            <div className="list">
                {
                    entirelist.map((item, index)=>{
                        return(
                            <div className="goal" key={index}>
                                <div className="goal-def">
                                    <p style={{textDecoration: item.boxcheck? "line-through": "none"}}> <strong>{item.todo}</strong> </p>
                                    <input onClick={(e)=>check(e,index)} type="checkbox" checked={item.boxcheck}/>
                                    <button onClick={(e)=> deleteItem(e,index)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default List;