import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import { Spinner } from './LoadingSpinner';

const RenderCard = ({item, isLoading, errMsg, classNamePar}) => {
    if(isLoading){
        return(
            <Card>
                <CardBody>
                    <Spinner />
                </CardBody>
            </Card>
        );
    } else if (errMsg){
        return(
            <h4>{errMsg}</h4>
        );
    } else {
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
    

}

function Home(props) {
    return(
        <div className="container" key="home">
            <div className="row align-items-start">
                <div className="col-12 col-md m-2">
                    <RenderCard item={props.dish} classNamePar={''} isLoading={props.dishLoading} errMsg={props.errMsg}/>
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