import React, {Fragment} from 'react';
import {Card, CardImg, CardText, CardBody,  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentsForm from './CommentsForm';
import { Spinner } from './LoadingSpinner';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
function RenderDish({dish}) {
    if (dish != null) {
        return(
            <Card key={dish.id}>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return(
            <Fragment />
        );
    }
}

function RenderComments({comments}) {
    if (comments!=null) {
        const commentSection = comments.map( comment => {
            var dateLocal = new Date(Date.parse(comment.date));
            const dateFormat = {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }
            var formatedDate = new Intl.DateTimeFormat('en-US',dateFormat).format(dateLocal);
            return(
                <Fade in>
                    <div key={comment.id} className="m-2">
                        <li> {comment.comment} </li>
                        <li> -- {comment.author}, {formatedDate}</li>
                    </div>
                </Fade>
            )
        });
        
        return(
            <Fragment key="comments">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <Stagger in>
                        {commentSection}
                    </Stagger>
                </ul>
            </Fragment>
        )
    } else {
        return(
            <div></div>
        );
    }
}

const DishDetail = (props) => {
            
        if (props.dishLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Spinner />
                    </div>
                </div>
            );
        }
        else if (props.dishErrMsg) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.dishErrMsg}</h4>
                    </div>
                </div>
            );
        }
        else if (props.selectedDish != null) {
            return (
                <div className="container" key={props.selectedDish.name}>
                    <div className="row">
                        <Breadcrumb className="mt-2">
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
                            <hr />
                        </div>        
                    </div>
                    <div className="row">
                        <div  className="col-12 col-md-5 mt-5">
                            <FadeTransform in  transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                                <RenderDish dish={props.selectedDish} />
                            </FadeTransform>
                        </div> 
                        <div className="col-12 col-md-5 m-5">
                            <RenderComments comments={props.comments} /> 
                            <CommentsForm postComment={props.postComment} dishId={props.selectedDish.id} />
                        </div>
                    </div>
                </div>
            )
        }
}

export default DishDetail;