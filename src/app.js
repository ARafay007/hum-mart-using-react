import './style.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Head from './components/header';
import Cart from './components/cart';
import MainPage from './components/mainPage';
import Footer from './components/footer';
import BookingCart from './components/bookCart/bookingCart';
import CartDetail from './components/bookCart/cartDetail';
import CategoryList from './components/CategoryList';
import { bundleNameAry } from './Constants';

const App = () => {
    const [cartToggle, setCartToggle] = useState(false);
    const [bundleObj, setBundleObj] = useState({});
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [customerOrders, setCustomerOrders] = useState([]);

    // useEffect(() => { console.log(Constants.bundleName()); }, []);

    //--------open and close cart--------
    const toggleCart = (toggler) => {
        setCartToggle(toggler);
    };

    const gettingBundleOffer = (_bundleObj) => {
        setBundleObj(_bundleObj);
    };

    const addIncreaseDecreaseItems = (obj, increaseOrDecrease) => {
        const cartListHolder = [...cartList];
        let amount = 0;
        let isItemContaine = false;

        //--------Increasing and decrasing items quantity.--------
        cartListHolder.forEach(el => {
            if (el.id === obj.id) {
                if (increaseOrDecrease) {
                    if (el.qty < 10) {
                        el.qty++;
                        el.remaining--;
                    }
                    else {
                        alert('No more stock available.');
                    }
                }
                else if (!increaseOrDecrease) {
                    if (el.qty > 1) {
                        el.qty--;
                        el.remaining++;
                    }
                    else {
                        alert('Item quantity should be atleast 1.');
                    }
                }
                isItemContaine = true;
            }
            amount += el.qty * el.price;
        });

        setTotalPrice(amount);

        //--------Add new item.--------
        if (!isItemContaine) {
            cartListHolder.push(obj);
        }

        setCartList(cartListHolder);
    };

    const removeItem = obj => {
        const cartListHolder = cartList.filter(el => el.id !== obj.id);
        let amount = 0;

        cartListHolder.forEach(el => {
            amount += el.price * el.qty;
        });

        setTotalPrice(amount);
        setCartList(cartListHolder);
    };

    const searchItem = (term) => {
        const cartListHolder = [...bundleNameAry];

        cartListHolder.forEach(el => {
            el.name.toLowerCase().split(' ').forEach(word => {
                if (term === word)
                    setBundleObj(el);
            });
        });
    };

    const order = (order) => {
        const customerOrdersHolder = [...customerOrders]
        customerOrdersHolder.push(order);
        setCustomerOrders(customerOrdersHolder);
    };

    return (
        <div>
            <Router>
                <Head toggleCart={toggleCart} cartListLength={cartList.length} searchItem={searchItem} />
                <Cart
                    toggleCart={toggleCart}
                    cartToggle={cartToggle}
                    cartList={cartList}
                    addIncreaseDecreaseItems={addIncreaseDecreaseItems}
                    totalPrice={totalPrice}
                    removeItem={removeItem}
                />
                <Switch>
                    <Route exact path='/'
                        render={(props) => <MainPage {...props}
                            gettingBundleOffer={gettingBundleOffer}
                            addIncreaseDecreaseItems={addIncreaseDecreaseItems}
                            bundleNameAry={bundleNameAry} />} />

                    <Route path='/bookingCart' render={(props) => <BookingCart {...props} bundleObj={bundleObj}
                        addIncreaseDecreaseItems={addIncreaseDecreaseItems} />} />

                    <Route path='/detailcart' render={(props) => <CartDetail {...props} cartList={cartList} order={order} />} />

                    <Route path='/categoryList/:id' render={(props) => <CategoryList {...props}
                        gettingBundleOffer={gettingBundleOffer}
                        addIncreaseDecreaseItems={addIncreaseDecreaseItems} />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};
export default App;