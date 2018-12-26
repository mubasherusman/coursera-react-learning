import React ,{Component, Fragment} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Contact from './ContactUs'
import About from './AboutUs'
import Footer from './Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreaters';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
    return {
        dishStore: state.dishes,
        commentStore: state.comments,
        promotionStore: state.promotions,
        leaderStore: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDishes: ()=>dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
        fetchPromos: () => dispatch(fetchPromos()),
        fetchLeaders: () => dispatch(fetchLeaders()),
        postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
        postFeedbackForm: (feedback) => dispatch(postFeedback(feedback)),
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    }
};

class Main extends Component {

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render(){

        return (
            <Fragment>
                <Header />
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path="/home" render={() => 
                                        <Home  
                                            dish={this.props.dishStore.dishes.filter(d => d.featured)[0]}
                                            dishLoading={this.props.dishStore.isLoading}
                                            dishErrMsg={this.props.dishStore.errMsg}
                                            promotion={this.props.promotionStore.promotions.filter((promo) => promo.featured)[0]}
                                            promoLoading={this.props.promotionStore.isLoading}
                                            promoErrMsg={this.props.promotionStore.errMsg}
                                            leader={this.props.leaderStore.leaders.filter(l => l.featured)[0]}
                                            leaderLoading={this.props.leaderStore.isLoading} 
                                            leaderErrMsg={this.props.leaderStore.errMsg}  />
                                    }>
                                </Route> 
                                <Route exact path="/menu" render={() => <Menu   dishStore={this.props.dishStore} />}  />
                                <Route path="/menu/:id" render={({match}) => (
                                    <DishDetail 
                                        selectedDish={this.props.dishStore.dishes.filter(d => d.id === parseInt(match.params.id))[0]}
                                        dishLoading={this.props.dishStore.isLoading}
                                        dishErrMsg={this.props.dishStore.errMsg}
                                        comments={this.props.commentStore.comments.filter(c => c.dishId === parseInt(match.params.id,10))}
                                        commentsLoading={this.props.commentStore.isLoading}
                                        commentsErrMsg={this.props.commentStore.errMsg}
                                        postComment={this.props.postComment}
                                    />
                                )} />
                                <Route exact path="/contactus" component={() => <Contact 
                                    resetFeedbackForm={this.props.resetFeedbackForm}
                                    postFeedbackForm={this.props.postFeedbackForm} />} />
                                <Route exact path="/aboutus" render={() => <About leaders={this.props.leaderStore.leaders} 
                                        leaderLoading={this.props.leaderStore.isLoading} leaderErrMsg={this.props.leaderStore.errMsg}/>} />
                                <Redirect to="/home" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
            </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));