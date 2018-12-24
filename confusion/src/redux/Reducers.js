
import * as ActionType from './ActionTypes';

export const Dishes = (state = {isLoading: true, errMsg: null, dishes: []}, action) => {
    switch(action.type) {
        case ActionType.DISHES_LOADING:
            return {...state, isLoading: action.payload, errMsg: null, dishes: []};
        case ActionType.DISHES_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, dishes: []};
        case ActionType.ADD_DISHES:
            return {...state, isLoading: false, errMsg: null, dishes: action.payload};
        default:
            return state;
    }
}

export const Comments = (state = {isLoading: true, errMsg: null, comments: []}, action) => {
    switch(action.type){
        case ActionType.COMMENTS_LOADING:
            return {...state, isLoading: action.payload, errMsg: null, comments: []};
        
        case ActionType.COMMENTS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, comments: []};
        
        case ActionType.ADD_COMMENTS:
            return {...state, isLoading: false, errMsg: null, comments: action.payload};
        
        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}

export const Promotions = (state  = { isLoading: true,  errMsg: null,    promotions:[]}, action) => {
    switch (action.type) {
        case ActionType.ADD_PROMOS:
            return {...state, isLoading: false, errMsg: null, promotions: action.payload};

        case ActionType.PROMOS_LOADING:
            return {...state, isLoading: true, errMsg: null, promotions: []}

        case ActionType.PROMOS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
        return state;
    }
};

export const Leaders = (state  = { isLoading: true,  errMsg: null,    leaders:[]}, action) => {
    switch (action.type) {
        case ActionType.ADD_LEADERS:
            return {...state, isLoading: false, errMsg: null, leaders: action.payload};

        case ActionType.LEADERS_LOADING:
            return {...state, isLoading: true, errMsg: null, leaders: []}

        case ActionType.LEADERS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
            return state;
    }
};