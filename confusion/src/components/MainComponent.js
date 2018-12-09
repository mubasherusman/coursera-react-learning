import React ,{Component, Fragment} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import Contact from './ContactUs'
import Footer from './Footer';

import {Switch, Route, Redirect} from 'react-router-dom';

import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render(){

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/home" component={() => <Home  
                        dish={this.state.dishes.filter(d => d.featured)[0]}
                        promotion={this.state.promotions.filter(f => f.featured)[0]}
                        leader={this.state.leaders.filter(l => l.featured)[0]}
                        />}>
                    </Route> 
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}
export default Main;