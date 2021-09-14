import React from 'react';
import HeaderImgGrid from './mainPage/headerImgGrid';
import BundleOffer from './mainPage/bundleOffer';
import Categories from './mainPage/categories';

const MainPage = (props) => {
    return (
        <React.Fragment>
            <HeaderImgGrid />
            <BundleOffer gettingBundleOffer={props.gettingBundleOffer}
                addIncreaseDecreaseItems={props.addIncreaseDecreaseItems}
                bundleNameAry={props.bundleNameAry} />
            <Categories />
        </React.Fragment>
    );
};

export default MainPage;