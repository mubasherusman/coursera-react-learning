import React ,{Component, Fragment} from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './Menu';
import DishDetail from './DishDetail';
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
               <Navbar color="primary" dark>
                    <div className="container">
                        <NavbarBrand href="/">Resturent</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelection(dishId)}/>
                <DishDetail selectedDish={this.getDishById(this.state.selectedDishId)} />
            </Fragment>
        )
    }
}
export default Main;