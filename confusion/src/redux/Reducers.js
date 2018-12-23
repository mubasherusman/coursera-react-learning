import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

import * as ActionType from './ActionTypes';

export const Dishes = (state = {isLoading: true, errMsg: null, dishes: []}, action) => {
    switch(action.type){
        case ActionType.DISHES_LOADING:
            return {...state, isLoading: action.payload, errMess: null, dishes: []};
        case ActionType.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
        case ActionType.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};
        default:
            return state;
    }
}

export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}

export const Promotions = (state = PROMOTIONS, action) => {
    switch(action){
        default:
            return state;
    }
}

export const Leaders = (state = LEADERS, action) => {
    switch(action){
        default:
            return state;
    }
}