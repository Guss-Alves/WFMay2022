import React, { useState } from "react";
import axios from 'axios'

const AxiosPokemon = () => {

    let [pokemon, setPokemon] = useState([])


    const getData = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=1000")
            .then(response => {
                console.log("this is the API result -->", response);
                setPokemon(response.data.results);
            })
            .catch(err => {
                console.log('something went wrong ->', err)
            })
    }


    return (
        <div>
            <button className="btn" onClick={getData} >Fetch Pokemons</button>
            {
                pokemon.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>pokemon name : <strong>{item.name}</strong></p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default AxiosPokemon;