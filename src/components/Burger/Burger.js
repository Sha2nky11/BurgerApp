import React from 'react'
import classes from '../Burger/Burger.css'
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient'

const burger = (props) =>{
    
        let transformedIngredient = Object.keys( props.ingredient )
            .map( igKey => {
                return [...Array( props.ingredient[igKey] )].map( ( _, i ) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                } );
            } )
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start Adding Ingredient</p>
    }

    //console.log(transfromedIngredient);

    return(
        
        <div className = {classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type ="bread-bottom"/>
        </div>

    );
}

export default burger;