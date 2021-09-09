import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const toggleCart = () => {
        props.toggleCart(false);
    };

    const increaseOrDecreaseQty = (obj, boolean) => {
        props.addIncreaseDecreaseItems(obj, boolean);
    };

    const removeItem = obj => {
        props.removeItem(obj);
    };

    const cartItems = () => {
        if (props.cartList.length === 0)
            return;
        else {
            return props.cartList.map(el => {
                return (
                    <div className="cart-itemInfo" key={`${el.id}`}>
                        <div className="cart-itemInfo-img">
                            <img className='cart-Img' src={`${el.img}`} alt="" />
                        </div>
                        <div className="cart-itemInfo-detail">
                            <p className="cart-itemInfo-p1">{el.bundleName}</p>
                            <p className="cart-itemInfo-p2">{el.name}</p>
                            <p className="cart-itemInfo-p3">
                                <span className='increaseQty' onClick={() => increaseOrDecreaseQty(el, true)}>+</span>
                                &nbsp; <span className='qty'>{el.qty}</span> &nbsp;
                                <span className='decreaseQty' onClick={() => increaseOrDecreaseQty(el, false)}>-</span>
                                &nbsp; Stock <span className='reamining'>{el.remaining}</span>
                            </p>
                        </div>
                        <div className="cart-itemInfo-price">
                            <button className="RemoveItem" data-key={`${el.id}`} onClick={() => removeItem(el)}>Remove</button>
                            <p>Rs ${el.price}</p>
                        </div>
                    </div>
                );
            });
        }
    };

    return (
        <React.Fragment>
            <div className={`cart ${props.cartToggle ? '' : 'hideCart'}`}>
                <div className="cart_QtyDiv">My Cart <span className='itemQty'></span> <span onClick={toggleCart} className="crossBtn">&#x274c;</span></div>
                <div className="cardTopDiv">
                    <div className="cart_chargesDiv">
                        <span>Subtotal</span><span className='priceSpan'>{props.totalPrice}</span>
                    </div>
                    {cartItems()}
                </div>
                <div className="cardBottomDiv">
                    <Link to="/detailCart" className='btn-cart'>Proceed To Checkout</Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Cart;