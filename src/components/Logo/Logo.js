import  React from 'react';
import burgerLogo from '../../../src/assets/images/burger.png';
import classes from '../Logo/Logo.css'

const logo = (props) => (
    <div className = {classes.Logo} style = {{height:props.height}}>
        <img src= {burgerLogo} alt="MY LOGO"/>
    </div>
);

export default logo;