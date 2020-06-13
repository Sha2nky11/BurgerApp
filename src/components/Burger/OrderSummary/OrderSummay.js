import React from 'react'
import Auxx from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
   
    const ingredientSummary = Object.keys( props.ingredient)
    .map(igkey =>{
    return (<li key = {igkey}>
        <span style = {{textTransform :'capitalize'}}>{igkey}</span> : {props.ingredient[igkey]}
        </li> )
    });

    return (
    <Auxx>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary}

        </ul>
    <p><strong>Total Price : {props.price} RS</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
        <Button btnType = "Success" clicked = {props.purchaseContinued}>CHECKOUT</Button>
    </Auxx>
    );
}

export default orderSummary;