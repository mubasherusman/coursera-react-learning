import React from 'react';
import {Card, CardImg, CardImgOverlay,  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Spinner } from './LoadingSpinner';

function MenuItem({dishItem}){
    return (
        <Card key={dishItem.id}>
            <NavLink to={`/menu/${dishItem.id}`}>
                <CardImg src={dishItem.image} alt={dishItem.name} />
                <CardImgOverlay>
                    <CardTitle>{dishItem.name}</CardTitle>
                </CardImgOverlay>
            </NavLink>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishStore.dishes.map( dish => {
        return(
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <MenuItem dishItem={dish} />
            </div>
        )
    });
    if (props.dishStore.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Spinner />
                </div>
            </div>
        );
    }
    else if (props.dishStore.errMsg) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishStore.errMsg}</h4>
                    </div>
                </div>
            </div>
        );
    } else {
       
        return(
            <div className="container" key="menu">
                <div className="row">
                    <Breadcrumb className="mt-2">
                        <BreadcrumbItem><NavLink to="/home">Home</NavLink></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>        
                </div>
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
}

export default Menu;