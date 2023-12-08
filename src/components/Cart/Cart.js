import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id : 'cl', name: 'Boost', Amount : 2, price : 35.20},
                        ].map((item) => <li>{item.name}</li>)}</ul>
    return(
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>15.00</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
)
}

export default Cart;