import Offer from "./Offers";

const BundleOffer = (props) => {
    return (
        <section className="Section-bundleOffer">
            <div className="bundleOffer-container">
                <p>NEW BUNDLE OFFERS</p>
                <div className="offer-container">
                    <Offer bundleNameAry={props.bundleNameAry} gettingBundleOffer={props.gettingBundleOffer}
                        addIncreaseDecreaseItems={props.addIncreaseDecreaseItems} />
                </div>
            </div>
        </section>
    );
};

export default BundleOffer;