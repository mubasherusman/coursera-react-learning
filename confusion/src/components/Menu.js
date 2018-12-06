import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
    const menu = props.dishes.map( dish => {
        return(
            <div className="col-12 col-md-5 mt-5">
                <MenuItem dishItem={dish} onClick={props.onClick}/>
            </div>
        )
    });

    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
        </div>
    );
}

export default Menu;