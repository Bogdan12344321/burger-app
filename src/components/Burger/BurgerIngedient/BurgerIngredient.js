import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient';

class BurgerIngredient extends Component {
   render (){
    const divStyle = {
        "height": "13%",
        "width": "80%",
        "background": "linear-gradient(#F08E4A, #e27b36)",
        "border-radius":" 0 0 30px 30px",
        "box-shadow": "inset -15px 0 #c15711",
        "margin": "2% auto"
    };
    let ingredient = null;
    console.log(this.props.type);
    switch(this.props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadTop}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>
            )
            break;
        case('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;

        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;

        case('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;

        case('bacon'):
            ingredient = <div className={classes.Beacon}></div>
            break;
    }
    console.log(ingredient);
    return ingredient;
   }
};

// BurgerIngredient.propTypes ={
//     type:PropTypes.string.isRequired
// }

export default BurgerIngredient;