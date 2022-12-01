import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Monitor = (props) => {
    const {id, mpn, name, img, des, display, features, ports, price, regular, code, model} = props.monitor;

    const handleClick = (e) => {
        props.onAddProduct(e);
    }

    return (
        <div className="card">
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <div className="des">
                <h2>{name}</h2>
                <h3>Display : {display}</h3>
                <h3>Features : {features}</h3>
                <h3>Price : {price}</h3>
                <button onClick={() => handleClick(props.monitor)}><FaCartPlus /> add to cart</button>
            </div>
        </div>
    )
}

export default Monitor;