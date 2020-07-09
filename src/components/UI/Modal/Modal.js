import React, { Component } from 'react'
import classes from '../Modal/modal.css'
import Auxx from '../../../hoc/Auxx'
import Backdrop from '../Backdrop/Backdrop'

class  modal extends Component {

    shouldComponentUpdate(nextProp,nextState){
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log("MODAL WILL UPDATE");
    }

    render(){

        
        return(
            <Auxx>
        <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
    <div 
        style = {{
        transform : this.props.show ? 'translateY(0)':'translateY(-100vh)',
        opacity : this.props.show ? '1': '0' 
            }}
        className = {classes.Modal}>
        {this.props.children}
    </div>
    </Auxx>
        );
    }
    
    
}

export default modal;