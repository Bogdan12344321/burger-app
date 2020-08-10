import React,{Component} from 'react';
import Auxiliray from '../Auxiliray';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer:true
    }
    
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = () =>{

        console.log('intra vere? ');
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })

    }

    render(){
        return (
        <Auxiliray>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliray>
        );
    }
};

export default Layout;