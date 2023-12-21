import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';

const MealItemForm = (props) => {
    const cartCntx = useContext(CartContext)

    const addItemToCart = (e) => {
         e.preventDefault();
         const quantity = document.getElementById(`amount_${props.id}`).value;
         cartCntx.addItem({...props.item, quantity: quantity})
         
         
    }
    
    return(
        <form className={classes.form}>
            
            <Input label='Quantity' input={{
                id: `amount_${props.id}`,
                type : 'Number',
                min : '1',
                max : '5',
                step : '1',
                defaultValue : '1'

                
             }}/>
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    )

}

export default MealItemForm