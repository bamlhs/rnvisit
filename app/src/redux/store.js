import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import placesReducer from './Reducers/placesReducer';



const enhancers = [];
const middlewares = [];
enhancers.push(applyMiddleware(...middlewares));
//enhancers.push(applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const reducer = combineReducers({
    places: placesReducer,
})
const store = createStore(reducer, {}, composeEnhancers(...enhancers));

export default store;
