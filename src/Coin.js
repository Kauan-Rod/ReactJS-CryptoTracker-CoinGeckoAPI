import React from "react";
import "./Coin.css"

export default function Coin({image, name, symbol, price, volume, priceChange, marketcap}) {
    return(
        <div className="coin-container">
            <div className="coin-row">
            <div className="coin-identification">
                <img className="coin-image mr" src={image} alt="cryptoimage"/>
                <div className="coin-name mr">{name}</div>
                <div className="coin-symbol">({symbol})</div>
            </div>
            <div className="coin-data">
                <div className="coin-price">${price.toLocaleString()}</div>
                <div className="coin-volume">${volume.toLocaleString()}</div>
                {priceChange < 0 ? (
                        <div className="coin-percentage-price-change red">{priceChange.toFixed(2)}%</div>
                    ) : (
                        <div className="coin-percentage-price-change green">{priceChange.toFixed(2)}%</div>
                    )}
                <div className="coin-mkt-cap">${marketcap.toLocaleString()}</div>
            </div>
            </div>
        </div>
    )
}
