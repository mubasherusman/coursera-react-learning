import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes, Comments, Leaders, Promotions} from './Reducers';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const configureStore = () => createStore(
    combineReducers({
        dishes: Dishes,
        comments: Comments,
        leaders: Leaders,
        promotions: Promotions,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk,logger)
)