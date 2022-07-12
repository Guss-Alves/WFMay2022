import React, {useState} from "react";

const FetchPokemon = ()=>{

    let [pokemon, setPokemon] = useState([])
    
    
    const getData = ()=>{

        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=1000")
            .then(response=>{
                return response.json()
            })
            .then(response=>{
                console.log("this is the API result -->", response);
                setPokemon(response.results);
            })
            .catch(err=>{
                console.log('something went wrong ->', err)
            })
    }


    return(
        <div>
            <button className="btn" onClick={getData} >Fetch Pokemons</button>
            {
                pokemon.map((item, index)=>{
                    return(
                        <div key={index}>
                        <p>pokemon name : <strong>{item.name}</strong></p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default FetchPokemon;