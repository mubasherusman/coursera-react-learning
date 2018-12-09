import React from 'react';
import {Card, CardImg, CardImgOverlay,  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

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

    const menu = props.dishes.map( dish => {
        return(
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <MenuItem dishItem={dish} />
            </div>
        )
    });

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

export default Menu;