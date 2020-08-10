import React from 'react';
import classes from './Backdrop.css';

const backdrop = (porps) =>(
    porps.show ? <div className={classes.Backdrop} onClick={porps.clicked}></div> : null
)

export default backdrop;