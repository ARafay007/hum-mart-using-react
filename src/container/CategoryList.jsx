import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryList } from '../Constants';
// import { List } from "./List";

const CategoryList = (props) => {

    const param = useParams();

    const getBundleOffer = (el) => {
        props.gettingBundleOffer(el);
    };

    const addItemInCartList = el => {
        props.addIncreaseDecreaseItems(el, true);
    };

    const lists = () => {
        return categoryList.filter(el => el.category === param.id).map(el => {
            return <div className="offer-item" key={`${el.id}`}>
                <div className="offer-imgDiv">
                    <Link to={'/bookingCart'} className='offer-imgDiv-link'>
                        <img src={`${el.img}`} data-name={``} className='offer-imgDiv-img' onClick={() => getBundleOffer(el)} alt="" />
                    </Link>
                </div>
                <p>{`${el.name}`}</p>
                <div className="btnDiv">
                    <strike>Rs {`${el.saving}`}</strike>
                    Rs <span>{`${el.price}`}</span>
                    <button data-name={`${el.name}`} onClick={() => addItemInCartList(el)} className="btn btn-addToCart">ADD TO CART</button>
                </div>
            </div>
        });
    };

    return (
        <div className="categoryList">
            {lists()}
        </div>
    );
};

export default CategoryList;