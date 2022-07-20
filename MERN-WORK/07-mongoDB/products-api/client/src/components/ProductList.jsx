import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ProductList = () => {

    let [allproducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response =>{
                console.log(response);
                setAllProducts(response.data.results);
            })
            .catch(err =>{
                console.log('something went wrong -->', err)
            })
    }, []);

    return (
        <div>
            <h1 className='title'>All Products :</h1>
            {
                allproducts.map((item)=>{
                    return(
                        <div key={item._id} className="product-display">
                            <div className="product-card">
                                <Link to={`/api/product/${item._id}`}>{item.title}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default ProductList;