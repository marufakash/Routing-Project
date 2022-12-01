import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Laptop = (props) => {
    const {id, mpn, model, name, img, display, features, price, processor, ram, brand, regular, code, des} = props.laptop;

    const handleClick = (e) => {
        props.onAddProduct(e);
    }

    return (
        <div className="card">
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <div className="des">
                <Link to={name} state={{id, mpn, model, name, img, display, features, price, processor, ram, brand, regular, code, des}}>
                    <h2>{name}</h2>
                </Link>
                <h3>Display : {display}</h3>
                <h3>Features : {features}</h3>
                <h3>Price : {price} ৳</h3>
                <button onClick={() => handleClick(props.laptop)}><FaCartPlus /> add to cart</button>
            </div>
        </div>
    )
}

export default Laptop;