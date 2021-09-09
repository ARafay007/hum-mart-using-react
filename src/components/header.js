import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Head = (props) => {
    const [term, setTerm] = useState('');

    const toggleCart = () => {
        props.toggleCart(true);
    };

    const onTextChange = e => {
        setTerm(e.target.value);
    };

    const searchItem = () => {
        props.searchItem(term);
    }

    return (
        <React.Fragment>
            <div className={"topDiv"}>
                <div className='topDiv_Content'>Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys & Electronics nationwide
                </div>
                <div className='topDiv_Divider'></div>
                <div className='topDiv_Nav'>
                    <div className="topDiv_NavLogin">Login</div>
                    <div className="topDiv_NavCustCare">Customer Care</div>
                    <div className="topDiv_NavContact">
                        <ion-icon name="call-outline"></ion-icon> (021) 111 116 278
                    </div>
                </div>
            </div>

            <nav className="nav2 nav2-active">
                <div className="nav-item">BEAUTY & PERSONAL CARE</div>
                <div className="nav-item">HOUSEHOLD NEEDS</div>
                <div className="nav-item">GROCERY & STAPLES</div>
                <div className="nav-item">FURNISHING & HOME NEEDS</div>
                <div className="nav-item">BABY KIDS & TOYS</div>
                <div className="nav-item">PHARMACY</div>
                <div className="nav-item">MORE</div>
            </nav>

            <header>
                <div className="searchSection">
                    <div className="searchSection_heading">Hum<span>Mart</span></div>
                    <div className="searchSection_inputs">
                        <input type="text" className='searchSection_search' placeholder="Search entire store here..."
                            value={term} onChange={e => onTextChange(e)} />
                        <input type="button" onClick={searchItem} className='btn-search' value="Search" />
                    </div>
                    <div className="searchSection_Gif"><img src="Images/Toys_Gif.gif" alt="Toys Gif" /></div>
                    <div className="searchSection_Cart">
                        <ion-icon name="cart-outline" className="openCart" size="large" style={{ 'color': 'rgb(12, 185, 12)' }} onClick={toggleCart}></ion-icon>
                        <span className='itemQty'>{props.cartListLength} item(s)</span>
                    </div>
                </div>

                <nav className="nav">
                    <div className="nav-item">BEAUTY & PERSONAL CARE</div>
                    <div className="nav-item">HOUSEHOLD NEEDS</div>
                    <div className="nav-item">GROCERY & STAPLES</div>
                    <div className="nav-item">FURNISHING & HOME NEEDS</div>
                    <div className="nav-item">BABY KIDS & TOYS</div>
                    <div className="nav-item">PHARMACY</div>
                    <div className="nav-item">
                        <Link to={'/'} className="nav-item-link">Main Page</Link></div>
                </nav>

            </header>
        </React.Fragment>
    );
};

export default Head;