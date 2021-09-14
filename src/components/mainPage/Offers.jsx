import React from 'react';
import { Link } from 'react-router-dom';

const Offer = (props) => {
    const getbundleOffer = (el) => {
        props.gettingBundleOffer(el);
    };

    const addItemInCartList = el => {
        props.addIncreaseDecreaseItems(el, true);
    };

    const offers = () => {
        return props.bundleNameAry.map(el => {
            return (
                <div className="offer-item" key={el.id}>
                    <div className="offer-imgDiv">
                        <Link to={'/bookingCart'} className='offer-imgDiv-link'>
                            <img src={`${el.img}`} data-name={`${el.name}`} className='offer-imgDiv-img' onClick={() => getbundleOffer(el)} alt="" />
                        </Link>
                    </div>
                    <p>{el.bundleName}</p>
                    <div className="btnDiv">
                        <strike>Rs 195</strike>
                        Rs <span>{el.price}</span>
                        <button data-name={`${el.name}`} onClick={() => addItemInCartList(el)} className="btn btn-addToCart">ADD TO CART</button>
                    </div>
                </div>
            )
        }
        );
    };

    return <React.Fragment>{offers()}</React.Fragment>;
}

export default Offer;