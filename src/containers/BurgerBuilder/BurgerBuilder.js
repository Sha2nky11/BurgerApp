import React ,{Component} from 'react'
import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummay'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGRIDIENT_PRICES = {
    salad : 1.00,
    cheese : 2.75,
    bacon: 3.99, 
    meat :1.15  
} 

class BurgerBuilder extends Component{
    
   /* constructor(props){
        super(props);
        this.state = {}
    }
    */

    state = {
        ingredient : {
            salad : 0,
            cheese : 0,
            bacon: 0, 
            meat :0 
        },
        totalPrice : 4,
        purchasable :false,
        purchasing : false,
        loading : false
    }

    updatedPurchasestate = (ingredient) =>{
       // const ingredient = {...this.state.ingredient};
        const sum = Object.keys(ingredient)
        .map(igkey => {
            return ingredient[igkey];
        })
        .reduce((sum,el) => {
            return sum + el;
        },0);
        this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) => {
         const oldCount = this.state.ingredient[type];
         const updatedCount = oldCount + 1;
         const updatedIngredient = {...this.state.ingredient};
         console.log(updatedIngredient);
         updatedIngredient[type] = updatedCount;

         const priceAddition = INGRIDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({totalPrice : newPrice, ingredient:updatedIngredient});
         this.updatedPurchasestate(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0 ){
            return;
        }
         const updatedCount = oldCount - 1;
         const updatedIngredient = {...this.state.ingredient};
         console.log(updatedIngredient);
         updatedIngredient[type] = updatedCount;

         const priceAddition = INGRIDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - priceAddition;
         this.setState({totalPrice : newPrice, ingredient:updatedIngredient});
         this.updatedPurchasestate(updatedIngredient);    
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});

    }  

    purchaseCancelHandler = () => {
        this.setState({purchasing  :false});
    }

    purchaseContinueHandler  = () => {
       // alert('You Continue');
      this.setState({loading:true}); 
      const order = {
           ingredient: this.state.ingredient,
           totalPrice: this.state.totalPrice,
           customer : {
               name: 'Shashank Yadav',
               address : {
                   street : 'Test',
                   city : 'katni',
                   country : 'India',
                   email: 'Sha2nky@gmail.com'
               },
               deliveryMode : 'fastest'
           }
       };
       axios.post('/orders.json', order)
       .then(   response => {
           console.log(response);
        this.setState({loading:false, purchasing:false});
       })
       .catch(error => { 
           this.setState({loading:false , purchasing:false});
        });
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredient
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
            //{salad:true,meat:false}

        let orderSummary =   <OrderSummary 
        ingredient = {this.state.ingredient}
        purchaseCanceled = {this.purchaseCancelHandler}
        purchaseContinued = {this.purchaseContinueHandler}
        price = {this.state.totalPrice.toFixed(2)}
        />;
        
        if(this.state.loading){
            orderSummary = <Spinner/>;
        }
        
        
        return(
            <Auxx>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                  {orderSummary}  
                </Modal>
                <Burger ingredient = {this.state.ingredient}/> 
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    purchasable = {this.state.purchasable}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice.toFixed(2)}
                    ordered = {this.purchaseHandler}
                />
            </Auxx>
        );
    }
}

export default BurgerBuilder;