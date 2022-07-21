import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Form = () => {

    let [forminfo, setFormInfo] = useState({});
    let [formerror, setFormError] = useState({})

    const navigate = useNavigate();

    const changeHandler = (e)=>{
        setFormInfo({
            ...forminfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author/new', forminfo)
            .then(res =>{
                console.log(res)
                if(res.data.errors){
                    setFormError(res.data.errors)
                }else{
                    navigate('/')
                }
            })
            .catch(err=>{
                console.log('Something went wrong', err)
            })
    };

    return (
        <div>
            <Link className='ms-3 h5' to='/'>Home</Link>
            <h3 className='ms-3 mt-3'>Add a new Author :</h3>
            <form onSubmit={submitHandler} className='ms-3 border border-secondary p-3' style={{width: '400px'}} >
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='name' />
                    <p className='text-danger'>{formerror.name?.message}</p>
                </div>
                <div className="form-group mt-2">
                    <Link to='/' className='btn btn-danger me-2' >Cancel</Link>
                    <input className='btn btn-success' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Form;