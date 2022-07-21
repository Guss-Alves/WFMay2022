import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ProductList = (props) => {

    let [allproducts, setAllProducts] = useState([]);
    let [deleteclicked, setDeleteClicked] = useState (false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response =>{
                console.log(response);
                setAllProducts(response.data.results);
            })
            .catch(err =>{
                console.log('something went wrong -->', err)
            })
    }, [deleteclicked, props.formsubmitted]);

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res=> {
            console.log(res)
            setDeleteClicked(!deleteclicked)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className='title'>All Products :</h1>
            {
                allproducts.map((item)=>{
                    return(
                        <div key={item._id} className="product-display">
                            <div className="product-card">
                                <Link to={`/api/product/${item._id}`} className='product-name'>{item.title}</Link><br />
                                <div className="update-card">
                                    <Link className='update-btn' to={`/api/product/edit/${item._id}`}>Update product info</Link><br />
                                </div>
                                    <button onClick={()=> deleteProduct(item._id)} className='btn-delete'>Delete product</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default ProductList;