import React ,{Component, Fragment} from 'react';
import Header from './Header';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Footer from './Footer';

import {DISHES} from '../shared/dishes';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDishId: null
        }
    }

    onDishSelection(dishId){
        this.setState({selectedDishId: dishId});
    }

    getDishById(dishId){
        return this.state.dishes.filter((dish) => dish.id === dishId)[0];
        
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelection(dishId)}/>
                <DishDetail selectedDish={this.getDishById(this.state.selectedDishId)} />
                <Footer />
            </Fragment>
        )
    }
}
export default Main;