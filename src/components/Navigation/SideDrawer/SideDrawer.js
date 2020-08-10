
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliray';
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    props.open ? attachedClasses= [classes.SideDrawer, classes.Open] : attachedClasses= [classes.SideDrawer, classes.Close];
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div class={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;