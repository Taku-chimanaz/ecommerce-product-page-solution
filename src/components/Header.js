import React, { useRef, useState } from 'react';
import './../css/Header.css';
import CloseIcon from './../images/icon-close.svg'
import MenuIcon from './../images/icon-menu.svg';
import CartIcon from './../images/icon-cart.svg';
import UserAvatar from './../images/image-avatar.png';
import { Cart } from './Cart';


export const Header = ({ cartItem, setCartItem }) => {

    const [displayCart, setDisplayCart] = useState(false);
    const navContainer = useRef();

    const toggleVerticalNav = () => {
        navContainer.current.classList.toggle('displayNav');
    }

    return (

        <header>

            {/* burger */}

            <section className="header__left-side">

                <button className="menu-btn" onClick={toggleVerticalNav}>
                    <img src={MenuIcon} alt="Menu Icon" />
                </button>

                {/* logo */}

                <div className="logo-container">
                    <h1 className="logo">
                        sneakers
                    </h1>
                </div>

                {/*  navigation*/}

                <div className="nav-container" ref={navContainer}>



                    <nav>
                        <button className="close-btn" onClick={toggleVerticalNav}>
                            <img src={CloseIcon} alt="Close Icon" />
                        </button>
                        <a href="#">collections</a>
                        <a href="#">men</a>
                        <a href="#">women</a>
                        <a href="#">about</a>
                        <a href="#">contact</a>

                    </nav>
                </div>

            </section>

            {/* Cart-profile avatar */}

            <section className="header__right_side">

                <button className="cart-btn" onClick={() => setDisplayCart(!displayCart)}>
                    <img src={CartIcon} alt="" />
                    <p className="cart-items-counter">
                        {cartItem.length}
                    </p>
                </button>

                {
                    displayCart &&
                    <Cart cartItem={cartItem} setCartItem={setCartItem} />
                }

                <div className="user-profile-avatar-container">
                    <img src={UserAvatar} alt="User Avatar" />
                </div>

            </section>


        </header>
    )
}
