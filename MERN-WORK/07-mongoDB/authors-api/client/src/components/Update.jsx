import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Update = () => {

    const [update, setUpdate] = useState({})
    let [formError, setFormError] = useState({});
    let [notfound, setNotFound] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const changeHandler = (e)=> {
        setUpdate({
            ...update,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res =>{
                console.log(res.data)
                if(res.data.results){
                    setUpdate(res.data.results)
                }else{
                    setNotFound(!notfound)
                }
            })
            .catch(err => console.log(err));
    }, []);

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/edit/${id}`, update)
            .then(res =>{
                if(res.data.errors){
                    setFormError(res.data.errors)
                }else{
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            {
                notfound ? <><h1 className='text-center' >GO TRY TO HACK YOUR MOM'S WEBSITE !!!</h1><img src="https://c.tenor.com/ee4Z0yZkMSsAAAAC/leo-angry.gif" alt="mad gif" className='rounded mx-auto d-block' /></> : <><Link className='ms-3 h5' to='/'>Home</Link>
            <h3 className='ms-3 mt-3'>Edit this Author :</h3>
            <form onSubmit={submitHandler} className='ms-3 border border-secondary p-3' style={{width: '350px'}}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='name' value={update.name} />
                    <p className='text-danger'>{formError.name?.message}</p>
                </div>
                <div className="form-group mt-2">
                    <Link to='/' className='btn btn-danger me-2' >Cancel</Link>
                    <input className='btn btn-success' type="submit" value="Submit" />
                </div>
            </form></>
            }
        </div>
    );
};

export default Update;