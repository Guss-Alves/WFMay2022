import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {

    let [formInfo, setFormInfo] = useState({});
    let [formError, setFormError] = useState({});

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        e.target.reset();
        axios.post('http://localhost:8000/api/products/new', formInfo)
            .then(response =>{
                console.log(response)
                if(response.data.error?.errors){
                    setFormError(response.data.error.errors);
                }else{
                    setFormError({});
                }
            })
            .catch(err=>{
                console.log('Something went wrong', err)
            })
    } 

    return (
        <div className='form-create'>
            <form onSubmit={submitHandler}>
                <div className='control'>
                    <label>Title :</label>
                    <input onChange={changeHandler} type="text" name="title" />
                    <p className='validation'>{formError.title?.message}</p>
                </div>
                <div className='control'>
                    <label>Price :</label>
                    <input onChange={changeHandler} type="number" name="price" />
                    <p className='validation'>{formError.price?.message}</p>
                </div>
                <div className='control'>
                    <label>Description :</label><br />
                    <textarea onChange={changeHandler} name="description" cols="25" rows="5"></textarea>
                    <p className='validation'>{formError.description?.message}</p>
                </div>
                <input className='btn' type="submit" value="Create" />
            </form>
        </div>
    );
};


export default Form;