import React from "react";
import { useParams, useLocation } from "react-router-dom";
import style from './details.module.css';

const Details = () => {
    const {title} = useParams();
    const location = useLocation();
    const {id, mpn, name, brand, img, des, display, features, ports, price, regular, code, model} = location.state;

    return (
        <div className={style.details}>
            <div className={style.img}>
                <img src={img} alt={name} />
            </div>
            <div className={style.des}>
                <h2>{name}</h2>
                <div className={style.article}>
                    <article>Price : <span>{price}৳</span></article>
                    <article>Regular Price : <span>{regular}৳</span></article>
                    <article>Product Code : <span>{code}</span></article>
                    <article>Brand : <span>{brand}</span></article>
                </div>
                <h3>Key Features</h3>
                <p>MPN : {mpn}</p>
                <p>Model : {model}</p>
                <p>Display : {display}</p>
                <p>Features : {features}</p>
            </div>
        </div>
    )
}

export default Details;