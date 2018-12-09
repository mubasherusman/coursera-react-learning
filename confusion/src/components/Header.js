import React, { Fragment, Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler,Collapse } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class  Header extends Component {

    constructor(props){
        super(props);
        this.toggleNav = this.navBarToggle.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    navBarToggle(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className='mr-auto' href="/">
                            <img height="90" width="90" src="/assets/images/logo.png" alt="Restorante Con Fusion"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-cutlery fa-lg" /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info-circle fa-lg" /> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div  className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Fragment>
        )
    }

}

export default Header;