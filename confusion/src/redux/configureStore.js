import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes, Comments, Leaders, Promotions} from './Reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => createStore(
    combineReducers({
        dishes: Dishes,
        comments: Comments,
        leaders: Leaders,
        promotions: Promotions
    }),
    applyMiddleware(thunk,logger)
)