import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import cityReducer from '../Reducer/CityReducer';
import nameReducer from '../Reducer/NameReducer';

 const cR =  combineReducers({
    nameReducer,
    cityReducer
})

 const myStore = createStore(cR, applyMiddleware(logger));


 export default myStore;