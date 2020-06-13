import React from 'react'
import classes from '../BuildControls/BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    { label :'salad', type: 'salad'},
    {label:'cheese' ,type :'cheese'},
    {label:'bacon' ,type :'bacon'},
    {label:'meat' , type :'meat'},
];

const buildControls = (props) => (
        <div className = {classes.BuildControls}>
            <p>Current Price : {props.price} Rs</p>
            {controls.map(ctrl =>(
                <BuildControl
                 key ={ctrl.label}
                 label ={ctrl.label}
                 added = {() => props.ingredientAdded(ctrl.type)}
                 removed = {() => props.ingredientRemoved(ctrl.type)}
                 disabled ={props.disabled[ctrl.type]} 
                 />
            ))}

           <button className = {classes.OrderButton}
           disabled = {!props.purchasable}
           onClick = {props.ordered}
           >ORDER NOW</button> 
        </div>
);

export default buildControls;