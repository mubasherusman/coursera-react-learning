import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class CommentsForm extends Component {

    constructor(props){
        super(props)
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }



    toggleModal(){
        this.setState(
            {isModalOpen: !this.state.isModalOpen}
        )
    }

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();
    }

    render(){
        return(
            <Fragment>
                <div className="mt-5">
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg" /> Submit Comment
                    </Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <Control.select model=".rating" name="rating" id="rating"  className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters.',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment" >Comment</label>
                                <Control.textarea model=".comment" id="comment" name="comment"  rows="5"  className="form-control" />
                               
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit" value="submit" color="primary">
                                    Submit
                                </button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
    
}