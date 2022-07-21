import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Details = () => {

    const [product, setProduct] = useState({})

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res=> {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className='product-details'>
            <h1>{product.title}</h1>
            <h1>Price : ${product.price}</h1>
            <h1>Description : {product.description}</h1>
            <Link to= '/' className='dashboard'>Go back</Link><br /><br />
            <button onClick={deleteProduct} className='btn-delete'>Delete {product.title}</button>
        </div>
        </>
    );
};

export default Details;