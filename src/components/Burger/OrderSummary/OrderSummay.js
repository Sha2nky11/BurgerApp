import React, { Component } from 'react'
import Auxx from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

class orderSummary extends Component {

    componentDidUpdate(){
        console.log("ORDER SUMMARY WILLUPDATE");
    }

    render() {

        const ingredientSummary = Object.keys( this.props.ingredient)
        .map(igkey =>{
        return (<li key = {igkey}>
            <span style = {{textTransform :'capitalize'}}>{igkey}</span> : {this.props.ingredient[igkey]}
            </li> )
        });

        return(
            <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
    
            </ul>
        <p><strong>Total Price : {this.props.price} RS</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {this.props.purchaseContinued}>CHECKOUT</Button>
        </Auxx>

        );
    }
    

}

export default orderSummary;