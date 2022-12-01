import React, { useState } from "react";
import Data from '../../Data.json';
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";
import Monitor from "../Monitor/Monitor";
import style from './shop.module.css';

const Shop = () => {
    const [products, setProducts] = useState(Data);
    const laptops = products.filter((product) => (product.id<11 && product.id>5));
    const monitors = products.filter((product) => product.id < 6);   

    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    }

    return (
        <div className={style.shop}>
            <div className={style.product}>
                {monitors && monitors.map((monitor) => <Monitor onAddProduct={handleAddProduct} key={monitor.id} monitor={monitor} />)}
                {laptops && laptops.map((laptop) => <Laptop onAddProduct={handleAddProduct} key={laptop.id} laptop={laptop} />)}
            </div>
            <div className={style.cart}>
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop;