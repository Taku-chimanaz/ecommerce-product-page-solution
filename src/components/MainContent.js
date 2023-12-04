import React, { useRef, useState } from 'react'
import './../css/MainContent.css';
import { ThumbnailsContainer } from './ThumbnailsContainer';
import { nextImg } from '../lib/nextImage';
import MinusIcon from './../images/icon-minus.svg';
import CloseIcon from './../images/icon-close.svg';
import PlusIcon from './../images/icon-plus.svg';
import NextIcon from './../images/icon-next.svg'
import CartIcon from './../images/icon-cart.svg';
import PrevIcon from './../images/icon-previous.svg';
import Img1 from './../images/image-product-1.jpg';
import Img2 from './../images/image-product-2.jpg';
import Img3 from './../images/image-product-3.jpg';
import Img4 from './../images/image-product-4.jpg';
import thumbNail1 from './../images/image-product-1-thumbnail.jpg';
import thumbNail2 from './../images/image-product-2-thumbnail.jpg';
import thumbNail3 from './../images/image-product-3-thumbnail.jpg';
import thumbNail4 from './../images/image-product-4-thumbnail.jpg';

export const MainContent = ({ setCartItem }) => {


    const [activeThumbnail, setActiveThumbnail] = useState(0);
    const [productQty, setProductQty] = useState(1);
    const modal = useRef();
    const [activeImg, setActiveImage] = useState(Img1);
    const thumbnails = [thumbNail1, thumbNail2, thumbNail3, thumbNail4];
    const images = [Img1, Img2, Img3, Img4];

    const changeImg = (index) => {
        setActiveImage(images[index]);
        setActiveThumbnail(index);
    }

    const toggleModal = () => {
        modal.current.classList.toggle('display-modal')
    }

    const changeProductQuantity = (e) => {
        const btnType = e.target.alt !== undefined ? e.target.alt.split(" ")[0].toUpperCase() : e.target.className.split("-")[0].toUpperCase();
        if (btnType === 'INCREMENT') {
            setProductQty(productQty + 1)
        } else {
            if (productQty === 1) {
                return
            }
            setProductQty(productQty - 1);
        }
    }


    const addToCart = () => {

        const productDetials = {
            name: 'Fall Limited Edition Sneakers',
            quantity: productQty,
            price: 125.00
        }
        localStorage.setItem('product', JSON.stringify(productDetials));
        setCartItem([productDetials])
    }



    return (
        <main>

            <section className="main__left-side">

                <div className="gallery-container">

                    <div className="main-image-container">
                        <img src={activeImg} alt="product" onClick={toggleModal} />
                    </div>

                    <div className="image-modal" ref={modal}>

                        <div className="main-image-container2" >
                            <button className="close-modal-btn" onClick={toggleModal}>
                                <img src={CloseIcon} />
                            </button>
                            <button className="prev-btn" onClick={e => nextImg(e, activeThumbnail, setActiveImage, images, setActiveThumbnail)}>
                                <img src={PrevIcon} alt="Prev Icon" />
                            </button>
                            <img src={activeImg} alt="product" />
                            <button className="next-btn" onClick={e => nextImg(e, activeThumbnail, setActiveImage, images, setActiveThumbnail)}>
                                <img src={NextIcon} alt="Next Icon" />
                            </button>
                        </div>

                        <div className="thumbnails-modal-container">
                            <ThumbnailsContainer
                                thumbnails={thumbnails}
                                activeThumbnail={activeThumbnail}
                                changeImg={changeImg}

                            />
                        </div>
                    </div>

                    <ThumbnailsContainer
                        thumbnails={thumbnails}
                        activeThumbnail={activeThumbnail}
                        changeImg={changeImg}
                    />

                </div>

            </section>

            <section className="main__right-side">

                <div className="product-details-container">

                    <p className="company-name">
                        sneaker company
                    </p>

                    <h1 className='product-name'>fall limited edition <span>sneakers</span></h1>

                    <p className="product-description">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. $125.00 50% $250.00 0 Add to cart

                    </p>

                    <div className="pricing-container">
                        <p className="pricing-container-price">
                            $125.00
                        </p>
                        <p className="discount">
                            50%
                        </p>
                    </div>

                    <p className="original-price">
                        $250.00
                    </p>
                    <div className="quantity-add-to-cart-container">

                        <div className="quantity-contents-container">
                            <button className="decrease-quantity-btn" onClick={e => changeProductQuantity(e)}>
                                <img src={MinusIcon} alt="Decrease Button" />
                            </button>

                            <p className="quantity-count">
                                {productQty}
                            </p>

                            <button className="increment-quantity-btn" onClick={e => changeProductQuantity(e)}>
                                <img src={PlusIcon} alt="Increment Button" />
                            </button>
                        </div>

                        <button className="add-to-cart-btn" onClick={addToCart}>
                            <img src={CartIcon} alt="Cart Icon" />
                            <p>Add to Cart</p>
                        </button>
                    </div>
                </div>

            </section>

        </main>
    )
}


