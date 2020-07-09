import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'
import classes from '../Layout/Layout.css'
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'


class layout extends Component {
   
    state ={
        sideDrawer :false
    }
   sideDrawerClosedHandler = () => {
        this.setState({sideDrawer:false});
   }

   sideDrawerToggleHandler = () => {
       this.setState((prevState) => {
           return{sideDrawer:!prevState.sideDrawer};
       });
   }
   
    render(){

        return( 
            <Aux>
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
            <SideDrawer  open = {this.state.sideDrawer} closed = {this.sideDrawerClosedHandler}/>
            
            <main className ={classes.Content}>
               {this.props.children }
            </main>
            </Aux>

        )
    }

}


export default layout;