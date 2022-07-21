import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const AuthorsList = () => {

    let [allauthors, setAllAuthors] = useState([]);
    let [deleteclicked, setDeleteClicked] = useState (false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setAllAuthors(res.data.results)
            })
            .catch(err => {
                console.log('Something went wrong', err)
            })
    }, [deleteclicked]);

    const deleteAuthor = (id)=>{
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(res=>{
                console.log(res)
                setDeleteClicked(!deleteclicked)
            })
            .catch(err => {
                console.log('Something went wrong', err)
            })
    }

    return (
        <div>
            <Link to='/api/author/new' className='mt-3 ms-3 btn btn-primary'>Add a new Author</Link>
            <h2 className='mt-3 ms-3'>We have quotes by:</h2>
            <table class="ms-3 me-3 table table-hover table-bordered w-50">
            <thead>
                <tr>
                <th scope="col">Author</th>
                <th scope="col" className='text-center'>Actions avalaible</th>
                </tr>
            </thead>
            {
                allauthors.map((item)=>{
                    return(
            <tbody>
                <tr>
                <td>{item.name}</td>
                <td className='d-flex justify-content-center'><Link to={`/api/author/edit/${item._id}`} className='btn btn-info btn-sm me-2'>Edit</Link> <button onClick={()=>deleteAuthor(item._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>
            </tbody>
                    )
                })
            }
            </table>
        </div>
    );
};

export default AuthorsList;