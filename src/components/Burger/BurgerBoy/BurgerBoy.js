import  React from 'react';
import burgerboy from '../../../assets/images/burgerboy.jpg';
import classes from '../BurgerBoy/BurgerBoy.css'

const burgerBoy = (props) => (
    <div className = {classes.BurgerBoy} style = {{height:props.height}}>
        <img src= {burgerboy} alt="Burger Boy"/>
    </div>
);

export default burgerBoy;