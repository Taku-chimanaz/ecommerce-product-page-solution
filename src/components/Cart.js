import React from 'react';
import './../css/Cart.css'
import { CartItem } from './CartItem';

export const Cart = ({ cartItem, setCartItem }) => {
    console.log(cartItem)
    return (
        <div className="cart">

            <div className="cart__header">
                <p>cart</p>
            </div>

            <div className="cart-items-container">

                {
                    cartItem.length > 0 ?
                        <CartItem cartItem={cartItem} setCartItem={setCartItem} /> :
                        <p className="cart-empty-text">
                            Your cart is empty
                        </p>
                }

            </div>

            {
                cartItem.length > 0 &&
                <div className="checkout-btn-container">
                    <button className="checkout-btn">
                        checkout
                    </button>
                </div>
            }


        </div>
    )
}
