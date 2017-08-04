import {createStore, applyMiddleware} from 'redux'
import {patientReducer} from './reducers/patientReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadPatients} from './actions/patientActions'

const store =  createStore(patientReducer,undefined, applyMiddleware(thunk, logger));

store.dispatch(loadPatients)

export default store;