import React from 'react'
import './../css/CartItem.css';
import deleteIcon from './../images/icon-delete.svg';
import productImg from './../images/image-product-1.jpg'


export const CartItem = ({ cartItem, setCartItem }) => {

    const removeCartItem = () => {

        localStorage.removeItem('product');
        setCartItem([]);
    }
    return (

        <article className="cart-item">

            <div className="item-img-container">
                <img src={productImg} alt="Product" />
            </div>

            <div className="item-details">
                <p className="item-name">
                    {cartItem[0].name}
                </p>
                <p className="item-price-quantity">
                    {`\$${cartItem[0].price} x ${cartItem[0].quantity}   `}<span>{`\$${cartItem[0].price * cartItem[0].quantity}`}</span>
                </p>
            </div>

            <button className="remove-item-btn" onClick={removeCartItem}>
                <img src={deleteIcon} alt="Delete Icon" />
            </button>
        </article>
    )
}
