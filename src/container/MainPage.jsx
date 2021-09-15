import React from 'react';
import HeaderImgGrid from '../components/HeaderImgGrid';
import BundleOffer from './BundleOffer';
import Categories from '../components/Categories';

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