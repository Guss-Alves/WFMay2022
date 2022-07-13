import React, {useState} from "react";
import axios from 'axios'

const AxiosCrypto = ()=>{

    let [coins, setCoins] = useState([])

    const getData = ()=>{

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response)=>{
                console.log('this is your data ->', response)
                setCoins(response.data)
            })
            .catch ((err)=>{
                console.log('something went wrong ->', err)
            })
    }

    return(
        <div>
            <button onClick={getData} className="btn">Find the best Crypto for yourself</button>
            <div className="container">
                {
                    coins.map((item, index)=>{
                        return(
                            <div key={index} className="list">
                                <h3 className="element">{item.name}</h3>
                                <p className="element">{item.symbol}</p>
                                <img className="img element" src={item.image}/>
                                <h3 className="element">Price : ${item.current_price}</h3>
                                <h3 className="element">Market Cap Rank : {item.market_cap_rank}</h3>
                                <h3 className="element">Total supply : {item.total_supply}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    
}

export default AxiosCrypto;