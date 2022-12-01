import React from "react";
import style from './cart.module.css';

const Cart = (props) => {
    const { cart } = props;
    let price = 0;
    for(let i=0; i<cart.length; i++){
        price = price + cart[i].price;
    }

    // Shipping cost
    let shipping = 12.99
    if(price < 500){
        shipping = (0 * cart.length);
    }else if(price > 500){
        shipping = (12.99 * cart.length);
    }else{
        shipping = 0;
    }

    // Tax cost
    let tax = Number(2.34 * cart.length);

    // Total price
    let totalPrice = (price + shipping + tax).toFixed(2);

    return (
        <div className={style.cart}>
            <h1>Order Summary</h1>
            <h2>Items Ordered : {cart.length}</h2>
            <h3>Price : {price} ৳</h3>
            <h3>Shipping : {shipping} ৳</h3>
            <h3>Tax+Vat : {tax} ৳</h3>
            <h3>Total Price : {totalPrice} ৳</h3>
            <button>Review your order</button>
        </div>
    )
}

export default Cart;