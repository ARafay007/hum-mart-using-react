const BookingCart = (props) => {
    return (
        <div className="detailDiv">
            <div className="detailDiv_Section">
                <img className='img' src={`${props.bundleObj.img}`} alt="" />
            </div>
            <div className="detailDiv_Section detailDiv2">
                <h3>{props.bundleObj.bundleName !== '' ? props.bundleObj.bundleName : props.bundleObj.name}</h3>
                <p className="pricePara">{props.bundleObj.price}</p>
                <p className="namePara">{props.bundleObj.bundleName !== '' ? props.bundleObj.name : ''}</p>
                <p className="quantityPara">Quantity <span>{props.bundleObj.qty}</span></p>
                <input type="button" value="ADD TO CART" className="btn-addToCart"
                    onClick={() => props.addIncreaseDecreaseItems(props.bundleObj, true)} />
            </div>
        </div>
    );
};

export default BookingCart;