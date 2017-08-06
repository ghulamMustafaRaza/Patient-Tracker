import {AsyncStorage} from 'react-native'
import {PatientActions} from '../actions'
const initState = {
 patients: [],
 isLoading: true
}
 ADD_PATIENT = "ADD_PATIENT"
 ADD_PATIENT_FULFIL = "ADD_PATIENT_FULFIL"

 ADD_PATIENT_VISIT = "ADD_PATIENT_VISIT"
 ADD_PATIENT_VISIT_FULFIL = "ADD_PATIENT_VISIT_FULFIL"

 REMOVE_PATIENT = "REMOVE_PATIENT"
 REMOVE_PATIENT_FULFIL = "REMOVE_PATIENT_FULFIL"

 SET_PATIENTS = "SET_PATIENTS"
 CNG_LOAD_STATE = "CNG_LOAD_STATE"

export const patientReducer = (state = initState, action) => {
  console.log(state, initState)
    var newState = {...state};
    switch (action.type) {
        case PatientActions.AFTER_TEST_HELLO: {
          console.log("In PatientActions. After Test hello",action.payload)
          return {...newState, data:action.payload}
        }
          
        case PatientActions.LOAD_PATIENTS_FULFIL:
          return {...newState,patients: action.payload}
          break;
        case PatientActions.ADD_PATIENT_FULFIL:
          return {...newState,patients: newState.patients.concat(action.payload)}
          break;
        case PatientActions.ADD_PATIENT_VISIT_FULFIL:
            return {...newState}
          break;
        case PatientActions.REMOVE_PATIENT_FULFIL:
            return {...newState,patients: [
            ...newState.patients.slice(0, action.payload),
            ...newState.patients.slice(action.payload + 1),
          ]}
          break;
        case PatientActions.REMOVE_ALL_PATIENTS:
          newState.patients = [];
          break;
        default:
        return newState
    }
    console.log(action.type, newState)
}