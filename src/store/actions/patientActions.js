export const addPatient = (patientData) => ({
    type: 'ADD_PATIENT',
    payload: patientData
})

export const addPatientVisit = (ind, visit) => ({
    type: 'ADD_PATIENT_VISIT',
    payload: {
        ind,
        visit
    }
})

export const removePatient = (ind) => ({
    type: 'REMOVE_PATIENT',
    payload: ind
})