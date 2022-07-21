import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const Update = () => {

    const [update, setUpdate] = useState({})
    let [formError, setFormError] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setUpdate(res.data.results))
            .catch(err => console.log(err));
    }, []);

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/edit/${id}`, update)
        .then(res =>{
            console.log(res.data)
            if(res.data.error?.errors){
                setFormError(res.data.error?.errors)
            }else{
                navigate("/")
            }
        })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="title"><h1>Update Product</h1></div>
            <div className="form-create">
                <form onSubmit={submitHandler}>
                    <div className='control'>
                        <label>Title :</label>
                        <input onChange={changeHandler} type="text" name="title" value={update.title} />
                        <p className='validation'>{formError.title?.message}</p>
                    </div>
                    <div className='control'>
                        <label>Price :</label>
                        <input onChange={changeHandler} type="number" name="price" value={update.price} />
                        <p className='validation'>{formError.price?.message}</p>
                    </div>
                    <div className='control'>
                        <label>Description :</label><br />
                        <textarea onChange={changeHandler} name="description" cols="25" rows="5" value={update.description}></textarea>
                        <p className='validation'>{formError.description?.message}</p>
                    </div>
                    <input className='btn' type="submit" value="Update" /><br /><br />
                    <Link to= '/' className='dashboard'>Go back</Link>
                </form>
            </div>
        </div>
    );
};

export default Update;