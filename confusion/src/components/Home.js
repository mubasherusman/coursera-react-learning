import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const RenderCard = ({item, classNamePar}) => {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} className={classNamePar} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? 
                    <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-2">
                    <RenderCard item={props.dish} classNamePar={''} />
                </div>
                <div className="col-12 col-md m-2">
                    <RenderCard item={props.promotion} classNamePar={''} />
                </div>
                <div className="col-12 col-md m-2">
                    <RenderCard item={props.leader} classNamePar={'imageSize'}/>
                </div>
            </div>
        </div>
    )
}

export default Home;