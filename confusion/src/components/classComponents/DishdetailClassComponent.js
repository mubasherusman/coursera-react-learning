import React, {Component, Fragment} from 'react';
import {Card, CardImg, CardText, CardBody,  CardTitle } from 'reactstrap'

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish!=null && dish.comments !== null) {
            const commentSection = dish.comments.map( comment => {
                var dateLocal = new Date(Date.parse(comment.date));
                const dateFormat = {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }
                var formatedDate = new Intl.DateTimeFormat('en-US',dateFormat).format(dateLocal);
                return(
                    <div key={comment.id} className="m-2">
                        <li> {comment.comment} </li>
                        <li> -- {comment.author}, {formatedDate}</li>
                    </div>
                )
            });
            
            return(
                <Fragment>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentSection}
                    </ul>
                </Fragment>
            )
        } else {
            return(
                <div></div>
            );
        }
        
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 mt-2">
                        {this.renderDish(this.props.selectedDish)}
                    </div> 
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)} 
                    </div>
                </div>
            </div>
        )
    }

}

export default DishDetail;