import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import { PatientActions } from './actions'
import { patientReducer } from './reducers/patientReducer'
import { PatientEpics } from './epics/index'

const rootEpics = combineEpics(
    PatientEpics.addPatients,
    PatientEpics.loadPatients,
    PatientEpics.addPatientsVisit,
    PatientEpics.removePatient,
    PatientEpics.testHello
)
console.log(PatientEpics.loadPatients)
const epicMiddlerware = createEpicMiddleware(rootEpics);
const store = createStore(
    patientReducer,
    applyMiddleware(thunk, epicMiddlerware, logger)
)

console.log('index store',store)


store.dispatch(PatientActions.loadPatientsStart())
// store.dispatch(PatientActions.testHelloWorld())
// store.dispatch(PatientActions.addPatient({name: "ghulam mustafa", phone: '030000000000000'}))

export default store;