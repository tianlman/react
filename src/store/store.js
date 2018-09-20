/**
 * Created by XTJ on 2018/8/16.
 */

import { createStore, applyMiddleware, compose } from 'redux';
// import createLogger from 'redux-logger';
import rootReducer from './test/reducer';
const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        // preloadedState,
        // compose (
        //     applyMiddleware(createLogger())
        // )
    );
};

const store = configureStore();

export default store;