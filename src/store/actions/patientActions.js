import {AsyncStorage} from 'react-native'
export const addPatient = (patientData) => ((dispatch) => {
    dispatch({
        type: 'ADD_PATIENT',
        payload: patientData
    })
    dispatch({
        type: 'UPD_LOCALSTORAGE'
    })
})

export const addPatientVisit = (ind, visit) => ((dispatch) => {
    dispatch({
        type: 'ADD_PATIENT_VISIT',
        payload: {
            ind,
            visit
        }
    })
    dispatch({
        type: 'UPD_LOCALSTORAGE'
    })
})
export const removePatient = (ind) => ((dispatch) => {
    dispatch({
        type: 'REMOVE_PATIENT',
        payload: ind
    })
    dispatch({
        type: 'UPD_LOCALSTORAGE'
    })
})

export const loadPatients = (dispatch) => {
    AsyncStorage.getItem('patients', (err, result) => {
        const value = JSON.parse(result);
        console.log(value) 
        if (value !== null && typeof(value) === 'object'){
            dispatch({
                type: 'SET_PATIENTS',
                payload: value.patients
            })
            console.log('localItem,',value)
        }
        else{
            dispatch({
                type: 'SET_PATIENTS',
                payload: []
            })
        }
        dispatch({
            type: 'CNG_LOAD_STATE'
        })
    });

}