import React from 'react'
import classes from '../Toolbar/Toolbar.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const toolbar = (props) => (
        <header className = {classes.Toolbar}>
           <DrawerToggle clicked ={props.drawerToggleClicked}/>
            <Logo height="80%"/>
            <nav className ={classes.DesktopOnly}>
            <NavigationItems/>
            </nav>
            
        </header>

); 

export default  toolbar;