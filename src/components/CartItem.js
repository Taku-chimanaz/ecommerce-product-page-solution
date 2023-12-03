import React from 'react'
import './../css/CartItem.css';
import deleteIcon from './../images/icon-delete.svg';
import productImg from './../images/image-product-1.jpg'


export const CartItem = () => {
    return (

        <article className="cart-item">

            <div className="item-img-container">
                <img src={productImg} alt="Product" />
            </div>

            <div className="item-details">
                <p className="item-name">
                    fall limited edition sneakers
                </p>
                <p className="item-price-quantity">
                    $125.00 x 3 <span>$375.00</span>
                </p>
            </div>

            <button className="remove-item-btn">
                <img src={deleteIcon} alt="Delete Icon" />
            </button>
        </article>
    )
}
