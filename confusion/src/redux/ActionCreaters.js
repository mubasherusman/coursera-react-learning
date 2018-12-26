import * as ActionType from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { actions } from 'react-redux-form';


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
            .then(handleApiErrors,handleNetworkErrors)
            .then(response => response.json())
            .then(dishesDto => dispatch(addDishes(dishesDto)))
            .catch(error => dispatch(dishesFailed(error.message)));
}
export const dishesLoading = (isLoading) => ({type: ActionType.DISHES_LOADING, payload: isLoading})
export const dishesFailed = (errMsg) => ({type: ActionType.DISHES_FAILED, payload: errMsg})
export const addDishes = (dishes) => ({type: ActionType.ADD_DISHES, payload: dishes})
// -----------------------------------------------------------------------------------
export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading(true));

    return fetch(baseUrl+'comments')
            .then(handleApiErrors,handleNetworkErrors)
            .then(response => response.json())
            .then(commentsDto => dispatch(addComments(commentsDto)))
            .catch(error => dispatch(commentsFailed(error.message)));
}
export const commentsLoading = (isLoading) => ({ type: ActionType.COMMENTS_LOADING, payload: isLoading})
export const commentsFailed = (errMsg) => ({ type: ActionType.COMMENTS_FAILED, payload: errMsg})
export const addComments = (comments) => ({ type: ActionType.ADD_COMMENTS, payload: comments})
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(handleApiErrors,handleNetworkErrors)
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};
export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
});
//------------------------------------------------------------------------------------
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(handleApiErrors,handleNetworkErrors)
        .then(response => response.json())
        .then(promosDto => dispatch(addPromos(promosDto)))
        .catch(error => dispatch(promosFailed(error.message)));
}
export const promosLoading = (isLoading) => {
    return ({ type: ActionType.PROMOS_LOADING, payload: isLoading });
};
export const promosFailed = (errMsg) => {
    return ({ type: ActionType.PROMOS_FAILED, payload: errMsg });
};
export const addPromos = (promos) => {
    return ({ type: ActionType.ADD_PROMOS, payload: promos });
};
//---------------------------------------------------------------------------
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(handleApiErrors,handleNetworkErrors)
        .then(response => response.json())
        .then(leadersDto => dispatch(addLeaders(leadersDto)))
        .catch(error => dispatch(leadersFailed(error.message)));
}
export const leadersLoading = (isLoading) => ({ type: ActionType.LEADERS_LOADING, payload: isLoading})
export const leadersFailed = (errMsg) => ({ type: ActionType.LEADERS_FAILED, payload: errMsg})
export const addLeaders = (leaders) => ({ type: ActionType.ADD_LEADERS, payload: leaders})
//-------------------------------------------------------------------------------
export const postFeedback = (feedback) => (dispatch) => {
    dispatch(actions.setPending('feedback', true));
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(handleApiErrors,handleNetworkErrors)
        .then(response => response.json())
        .then(feedbackDto => {alert('Current State is: ' + JSON.stringify(feedbackDto)); dispatch(actions.setSubmitted('feedback', true));})
        .catch(error =>  { console.log('post Feedback', error.message); alert('Your Feedback could not be posted\nError: '+error.message); });
};

// ---- Error Handler
const handleApiErrors = (response) => {
    if (!response.ok) {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
    }
    return response;
}

const handleNetworkErrors = (error) => {
    var errmess = new Error(error.message);
    throw errmess;
}