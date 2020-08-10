import React,{Component} from 'react';
import PropTypes from 'prop-types';
import  './BurgerIngredient';

class BurgerIngredient extends Component {
   render (){
    let ingredient = null;
    let styles = {
        BreadBottom :{
            "height": "13%",
            "width": "80%",
            "background": "linear-gradient(#F08E4A, #e27b36)",
            "border-radius": "0 0 30px 30px",
            "box-shadow": "inset -15px 0 #c15711",
            "margin": "2% auto"
        },
        BreadTop:{
            "height": "20%",
            "width": "80%",
            "background": "linear-gradient(#bc581e, #e27b36)",
            "border-radius": "50% 50% 0 0",
            "box-shadow": "inset -15px 0 #c15711",
            "margin": "2% auto",
            "position": "relative"
        },
        Seeds1:{
            "width": "10%",
            "height": "15%",
            "position": "absolute",
            "background-color": "white",
            "left": "30%",
            "top": "50%",
            "border-radius": "40%",
            "transform": "rotate(-20deg)",
            "box-shadow": "inset -2px -3px #c9c9c9"
        },
        Seeds2: {
            "width": "10%",
            "height": "15%",
            "position": "absolute",
            "background-color": "white",
            "left": "64%",
            "top": "50%",
            "border-radius": "40%",
            "transform": "rotate(10deg)",
            "box-shadow": "inset -3px 0 #c9c9c9"
          },
        Meat: {
            "width": "80%",
            "height": "8%",
            "background": "linear-gradient(#7f3608, #702e05)",
            "margin": "2% auto",
            "border-radius": "15px"
        },
        Cheese :{
            "width": "90%",
            "height": "4.5%",
            "margin": "2% auto",
            "background": "linear-gradient(#f4d004, #d6bb22)",
            "border-radius": "20px"
        },
        Salad :{
            "width": "85%",
            "height": "7%",
            "margin": "2% auto",
            "background": "linear-gradient(#228c1d, #91ce50)",
            "border-radius": "20px"
        },  
        Bacon: {
            "width": "80%",
            "height": "3%",
            "background": "linear-gradient(#bf3813, #c45e38)",
            "margin": "2% auto"
        }
    }

    switch(this.props.type){
        case('bread-bottom'):
            ingredient = <div style={styles.BreadBottom}></div>;
            break;

        case('bread-top'):
            ingredient = (
                <div style={styles.BreadTop}>
                    <div style={styles.Seeds1}></div>
                    <div style={styles.Seeds2}></div>
                </div>
            );
            break;
            
        case('meat'):
            ingredient = <div style={styles.Meat}></div>;
            break;

        case('cheese'):
            ingredient = <div style={styles.Cheese}></div>;
            break;

        case('salad'):
            ingredient = <div style={styles.Salad}></div>;
            break;

        case('bacon'):
            ingredient = <div style={styles.Bacon}></div>
            break;
            
        default:
                ingredient = null;
    }
  
    return ingredient;
   }
};

BurgerIngredient.propTypes ={
    type:PropTypes.string.isRequired
}

export default BurgerIngredient;