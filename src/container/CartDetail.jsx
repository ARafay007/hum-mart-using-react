import { Details } from "./Details";

const CartDetail = props => {

    return (
        <Details cartList={props.cartList} order={props.order} />
    );
};

export default CartDetail;