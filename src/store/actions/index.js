import store from "./../index"



export class PatientActions {
    constructor() { }

    static ADD_PATIENT = "ADD_PATIENT"
    static ADD_PATIENT_FULFIL = "ADD_PATIENT_FULFIL"

    static ADD_PATIENT_VISIT = "ADD_PATIENT_VISIT"
    static ADD_PATIENT_VISIT_FULFIL = "ADD_PATIENT_VISIT_FULFIL"

    static REMOVE_PATIENT = "REMOVE_PATIENT"
    static REMOVE_PATIENT_FULFIL = "REMOVE_PATIENT_FULFIL"

    static SET_PATIENTS = "SET_PATIENTS"
    static CNG_LOAD_STATE = "CNG_LOAD_STATE"

    static LOAD_PATIENTS_START = "LOAD_PATIENTS_START" 
    static LOAD_PATIENTS_FULFIL = "LOAD_PATIENTS_FULFIL" 

    static REMOVE_ALL_PATIENTS = "REMOVE_ALL_PATIENTS"

    static TEST_HELLO = "TEST_HELLO"
    static AFTER_TEST_HELLO = "AFTER_TEST_HELLO"

    static consoleLog = () => {
        console.log(' store',store)        
    }

    static loadPatientsStart = () => {
        return({
            type: PatientActions.LOAD_PATIENTS_START
        })
    }
    
    static testHelloWorld = () => {
        return({
            type: PatientActions.TEST_HELLO
        })
    }
    


    static loadPatientsFulfil = (payload) => {
        store.dispatch({
            type: PatientActions.LOAD_PATIENTS_FULFIL,
            payload: payload
        })
    }

    static addPatient = (payload) => {
        return({
            type: PatientActions.ADD_PATIENT,
            payload
        })
    }
    
    static addPatientFulfil = (payload) => {
        store.dispatch({
            type: PatientActions.ADD_PATIENT_FULFIL,
            payload
        })
    }

    static addPatientVisit = (payload) => {
        return({
            type: PatientActions.ADD_PATIENT_VISIT,
            payload
        })
    }

    static addPatientVisitFulfil = (payload) => {
        store.dispatch({
            type: PatientActions.ADD_PATIENT_VISIT_FULFIL,
            payload: payload
        })
    }

    static removePatient = (payload) => {
        return({
            type: PatientActions.REMOVE_PATIENT,
            payload
        })
    }

    static removePatientFulfil = (payload) => {
        store.dispatch({
            type: PatientActions.REMOVE_PATIENT_FULFIL,
            payload: payload
        })
    }

    static removeAllPatient = () => {
        return({
            type: PatientActions.REMOVE_ALL_PATIENTS
        })
    }
    
}