import React from 'react'

//Destructuring 
const Coin = ({ name, image, symbol, price, volume }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto img"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-pric">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
