import { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = props => {
    const[items, updatedItem] = useState([])
    const addItemToCartHandler = (item) => {
        updatedItem([...items, item])
    }
 
    const removeItemFromCartHandler = () => {}

    const cartContext = {
        items: items,
        totalAmount : 0,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromCartHandler
    }
    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;