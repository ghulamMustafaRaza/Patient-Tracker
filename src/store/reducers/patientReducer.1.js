import {AsyncStorage} from 'react-native'

const initState = {
 patients: [],
 isLoading: true
}

export const patientReducer = (state = initState, action) => {
  console.log(state, initState)
    var newState = {...state};
    switch (action.type) {
        case 'SET_PATIENTS':
          newState.patients = action.payload
          var patients = (action.payload?[...action.payload] : [])
          console.log('alert',patients)
          for(i=0;i<patients.length;i++){
            patients[i].ind = i
          }
          newState.patients = patients
          break;
        case 'ADD_PATIENT':
          newState.patients = newState.patients.concat(action.payload)
          break;
        case 'ADD_PATIENT_VISIT':
          let patients = Object.assign([], newState.patients);
          (newState.patients[action.payload.ind].visits?
            patients[action.payload.ind].visits = patients[action.payload.ind].visits.concat(action.payload.visit)
          :
            patients[action.payload.ind].visits = [action.payload.visit])
            newState.patients = patients;
          break;
        case 'REMOVE_PATIENT':
          newState.patients = [
            ...newState.patients.slice(0, action.payload),
            ...newState.patients.slice(action.payload + 1),
          ]
          var patients = ([...newState.patients] || [])
          console.log('alert',patients)
          for(i=0;i<patients.length;i++){
            patients[i].ind = i
          }
          newState.patients = patients
          break;
        case 'REMOVE_ALL_PATIENTS':
          AsyncStorage.removeItem('patient')
          newState.patients = [];
          break;
        case 'CNG_LOAD_STATE':
          newState.isLoading = false
          break;
        case 'UPD_LOCALSTORAGE':
          AsyncStorage.setItem('@patients', JSON.stringify(newState), () => {
            AsyncStorage.mergeItem('patients', JSON.stringify(newState), () => {
              AsyncStorage.getItem('patients', (err, result) => {
                console.log(result);
              });
            });
          })
        break;
    }
    console.log(action.type, newState)
    return newState;
}