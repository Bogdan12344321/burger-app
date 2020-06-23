import React from 'react';
import Auxiliray from '../../hoc/Auxiliray';
import classes from './Layout.css';

const Layout = (props) => (
    <Auxiliray>
    <div>Toolbar, SideDrawer, Backdrop</div>
    {/* <div className={classes.Content}>  {props.children}</div> */}
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxiliray>
);

export default Layout;