import React from 'react';
import './../css/Cart.css'
import { CartItem } from './CartItem';

export const Cart = () => {
    return (
        <div className="cart">

            <div className="cart__header">
                <p>cart</p>
            </div>

            <div className="cart-items-container">

                <CartItem />

                {/* <p className="cart-empty-text">
                    Your cart is empty
                </p> */}

            </div>

            <div className="checkout-btn-container">
                <button className="checkout-btn">
                    checkout
                </button>
            </div>


        </div>
    )
}
