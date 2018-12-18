import React ,{Component, Fragment} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Contact from './ContactUs'
import About from './AboutUs'
import Footer from './Footer';

import {connect} from 'react-redux'

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    render(){

        return (
            <Fragment>
                <Header />
                <Switch>
                    {   /* There is not performance different between component and render prop,
                       If you are using component={AppComponent} directly, 
                       If you want to assign some props to AppComponent, 
                       use render={() => <AppComponent {...props}/> } 
                       instead of component={() => <AppComponent {...props}/> } */}
                    <Route exact path="/home" render={() => <Home  
                        dish={this.props.dishes.filter(d => d.featured)[0]}
                        promotion={this.props.promotions.filter(f => f.featured)[0]}
                        leader={this.props.leaders.filter(l => l.featured)[0]}
                        />}>
                    </Route> 
                    <Route exact path="/menu" render={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:id" render={({match}) => (
                        <DishDetail 
                            selectedDish={this.props.dishes.filter(d => d.id === parseInt(match.params.id))[0]}
                            comments={this.props.comments.filter(c => c.dishId === parseInt(match.params.id))}
                        />
                    )} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" render={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps)(Main));