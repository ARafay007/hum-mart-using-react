import '../style.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Head from './header';
import Cart from './cart';
import MainPage from './mainPage';
import Footer from './footer';
import BookingCart from './bookCart/bookingCart';
import CartDetail from './bookCart/cartDetail';

const bundleNameAry = [{
    id: 1,
    name: 'Shahi Zeera',
    price: 120,
    bundleName: 'Super Saver Bundle 6',
    img: 'Images/bundleOffer-1.jpg',
    qty: 1,
    remaining: 9
},
{
    id: 2,
    name: 'Chat Masala',
    price: 111,
    bundleName: 'Super Saver Bundle 1',
    img: 'Images/bundleOffer-2.jpg',
    qty: 1,
    remaining: 9
}];

const App = () => {
    const [cartToggle, setCartToggle] = useState(false);
    const [bundleObj, setBundleObj] = useState({});
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [customerOrders, setCustomerOrders] = useState([]);

    useEffect(() => { console.log(customerOrders); }, [customerOrders]);

    //--------open and close cart--------
    const toggleCart = (toggler) => {
        setCartToggle(toggler);
    };

    const gettingBundleOffer = (_bundleObj) => {
        setBundleObj(_bundleObj);
    };

    const addIncreaseDecreaseItems = (obj, boolean) => {
        const cartListHolder = [...cartList];
        let amount = 0;
        let isItemContaine = false;

        //--------Increasing and decrasing items quantity.--------
        cartListHolder.forEach(el => {
            if (el.id === obj.id) {
                if (boolean) {
                    if (el.qty < 10) {
                        el.qty++;
                        el.remaining--;
                    }
                    else {
                        alert('No more stock available.');
                    }
                }
                else if (!boolean) {
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

                    <Route to='/detailcart' render={(props) => <CartDetail {...props} cartList={cartList} order={order} />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};
export default App;