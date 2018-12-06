import React from 'react';
import {Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap'

function MenuItem({dishItem, onClick}){
    return (
        <Card key={dishItem.id} onClick={() => onClick(dishItem.id)}>
            <CardImg src={dishItem.image} alt={dishItem.name} />
            <CardImgOverlay>
                <CardTitle>{dishItem.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default MenuItem;