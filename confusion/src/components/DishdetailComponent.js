import React, {Component} from 'react';
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
                    return(
                        <div key={comment.id} className="m-2">
                            <li> {comment.comment} </li>
                            <li> -- {comment.author}, {comment.date}</li>
                        </div>
                    )
                }
            );
            
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentSection}
                    </ul>
                </div>
            )
        } else {
            return(
                <div></div>
            );
        }
        
    }

    render(){
        return (
            <div className="row">
                <div  className="col-12 col-md-5 mt-2">
                    {this.renderDish(this.props.selectedDish)}
                </div> 
                {this.renderComments(this.props.selectedDish)} 
            </div>
        )
    }

}

export default DishDetail;