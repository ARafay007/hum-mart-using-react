import React, { useState } from 'react';

const CartDetail = props => {

    const [openCloseModel, setOpenCloseModel] = useState('hideModal');
    const [custName, setCustName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    // const [customerDetails, setCustomerDetails] = useState({ name: '', address: '', contact: '' });

    const toggleModal = toggle => {
        toggle ? setOpenCloseModel('') : setOpenCloseModel('hideModal');
    };

    const onTextChange = e => {
        if (e.target.dataset.name === "name") {
            setCustName(e.target.value);
        }
        else if (e.target.dataset.name === "address") {
            setAddress(e.target.value);
        }
        else if (e.target.dataset.name === "contact") {
            setContact(e.target.value);
        }
    };

    const bookOrder = () => {
        const ms = new Date();
        const orders = [...props.cartList];
        const orderObj = {
            id: ms.getMilliseconds(),
            'name': custName,
            address,
            contact,
            orders
        };
        props.order(orderObj);
    };

    const stopingPropagation = e => {
        e.stopPropagation();
    };

    const myCartHeading = () => {
        let totalPrice = 0;

        props.cartList.forEach(el => totalPrice += el.qty * el.price);

        return (
            <div>
                <span>My Cart</span> <span>Rs {totalPrice}</span>
            </div>
        );
    };

    const orderDetails = () => {
        if (props.cartList.length === 0)
            return;
        else {
            return props.cartList.map(el => {
                return (
                    <div className="cart-itemInfo" key={el.id}>
                        <div className="cart-itemInfo-img"><img className='cart-Img' src={`${el.img}`} alt="" /></div>
                        <div className="cart-itemInfo-detail">
                            <p className="cart-itemInfo-p1">{el.bundleName}</p>
                            <p className="cart-itemInfo-p2">{el.name}</p>
                        </div>
                        <div className="cart-itemInfo-price">
                            <p>Qty x {el.qty}</p>
                            <p>Rs {el.price}</p>
                        </div>
                    </div>
                );
            });
        }
    };

    return (
        <React.Fragment>
            <section className="section-blank_booking">
                <div className="section-blank__Container">
                    <div className="section-blank_Container-leftDiv">
                        <div className="numberVerification">
                            <div className="numberVerification-leftDiv">
                                <span>1</span>
                            </div>
                            <div className="numberVerification-rightDiv">
                                <span>Phone Number Verification</span>
                                <p className="numberVerification-rightDiv-p1">We need your phone number so that we can update you about your order.</p>
                                <p>Your 11 digit mobile number</p>
                                <input type="text" className="numberVerification_Input" placeholder="03" name="" id="" />
                                <input type="button" className="numberVerification_btn" value='Next' />
                            </div>
                        </div>
                        <div className="verificationDivs">
                            <div className="verificationDiv-leftDiv">
                                <span>2</span>
                            </div>
                            <div className="verification-rightDiv">Delivery Address</div>
                        </div>
                        <div className="verificationDivs">
                            <div className="verificationDiv-leftDiv">
                                <span>3</span>
                            </div>
                            <div className="verification-rightDiv">Delivery Date & Time</div>
                        </div>
                        <div className="verificationDivs">
                            <div className="verificationDiv-leftDiv">
                                <span>4</span>
                            </div>
                            <div className="verification-rightDiv">Payment</div>
                        </div>
                    </div>
                    <div className="section-blank_Container-rightDiv">
                        {myCartHeading()}
                        {orderDetails()}
                        <button className="section-blank_Container-rightDiv-button" onClick={() => toggleModal(true)}>Confirm Order</button>
                    </div>
                </div>
            </section>

            <div className={`modal ${openCloseModel}`} onClick={() => toggleModal(false)}>
                <div className="modal-UserInfo" onClick={stopingPropagation}>
                    <div><button className="modal-CloseBtn" onClick={() => toggleModal(false)}>X</button></div>
                    <div className="modal-UserInfo-div">
                        <label>Name</label>
                        <input type="text" className="nameField" placeholder="Enter your name..." data-name="name" onChange={onTextChange} />
                        <label>Address</label>
                        <input type="text" className="addressField" placeholder="Enter your address..." data-name="address" onChange={onTextChange} />
                        <label>Contact</label>
                        <input type="text" className="contactField" placeholder="Enter your contact number..." data-name="contact" onChange={onTextChange} />
                    </div>
                    <div>
                        <button className="bookOrder" onClick={bookOrder}>Done</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartDetail;