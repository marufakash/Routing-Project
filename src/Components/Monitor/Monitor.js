import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Monitor = (props) => {
    const {id, mpn, name, brand, img, des, display, features, ports, price, regular, code, model} = props.monitor;

    const handleClick = (e) => {
        props.onAddProduct(e);
    }

    return (
        <div className="card">
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <div className="des">
                <Link to={name} state={{id, mpn, brand, name, img, des, display, features, ports, price, regular, code, model}}>
                    <h2>{name}</h2>
                </Link>
                <h3>Display : {display}</h3>
                <h3>Features : {features}</h3>
                <h3>Price : {price} ৳</h3>
                <button onClick={() => handleClick(props.monitor)}><FaCartPlus /> add to cart</button>
            </div>
        </div>
    )
}

export default Monitor;