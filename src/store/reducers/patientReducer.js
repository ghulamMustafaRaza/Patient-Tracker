import {AsyncStorage} from 'react-native'

const initState = {
 patients: [],
 isLoading: true
}

export const patientReducer = (state = initState, action) => {
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
          newState.patients[action.payload.ind].visits?
            newState.patients[action.payload.ind].visits.push(action.payload.visit)
          :
            newState.patients[action.payload.ind].visits = [action.payload.visit]
          break;
        case 'REMOVE_PATIENT':
          newState.patients = [
            ...newState.patients.slice(0, action.payload),
            ...newState.patients.slice(action.payload + 1),
          ]
          var patients = ([...action.payload] || [])
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
    }
    AsyncStorage.setItem('@patients', JSON.stringify(newState), () => {
      AsyncStorage.mergeItem('patients', JSON.stringify(newState), () => {
        AsyncStorage.getItem('patients', (err, result) => {
          console.log(result);
          // => {'name':'Chris','age':31,'traits':{'shoe_size':10,'hair':'brown','eyes':'blue'}}
        });
      });
    })
    .catch((err) => {
      console.error(err)
    })
    console.log(action.type, newState)
    return newState;
}