import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import obi from '../obi.jpg'

const Data = () => {

    let [info, setInfo] = useState({})
    let [check, setCheck] = useState(null)

    const { category } = useParams();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log('here is the API response - >', response.data);
                setInfo(response.data);
                setCheck(true)
            })
            .catch(err => {
                console.log('something went wrong ->', err)
                setCheck(false)
            })
    }, [category, id]);


    return (
        <div>
            {
                category === "people" ?
                    <>
                        <div className='card'>
                            <h1>Name: {info.name} </h1>
                            <h3>Height: {info.height}cm </h3>
                            <h3>Mass: {info.mass}kg </h3>
                            <h3>Hair Color: {info.hair_color}</h3>
                            <h3>Skin Color: {info.skin_color}</h3>
                        </div>
                    </> : category ==='planets' ?
                    <>
                    <div className='card'>
                        <h1>planet: {info.name} </h1>
                        <h3>Climate: {info.climate}</h3>
                        <h3>Terrain: {info.terrain}</h3>
                        <h3>Surface Water: {info.surface_water}</h3>
                        <h3>Population: {info.population}</h3>
                    </div>
                    </> : category == 'films' ? 
                    <>
                        <div className='card'>
                            <h1>Title: {info.title} </h1>
                            <h3>Director: {info.director}</h3>
                            <h3>Producer: {info.producer}</h3>
                            <h3>Release Date: {info.release_date}</h3>
                        </div>
                    </> : null 
                
            }
        </div>
    );
};


export default Data;
