import store from "../../../index.android.js"

console.log(' store',store)


export class PatientActions {
    constructor() { }

    static ADD_PATIENT = "ADD_PATIENT"
    static ADD_PATIENT_VISIT = "ADD_PATIENT_VISIT"
    static REMOVE_PATIENT = "REMOVE_PATIENT"
    static SET_PATIENTS = "SET_PATIENTS"
    static CNG_LOAD_STATE = "CNG_LOAD_STATE"
    static LOAD_PATIENTS_START = "LOAD_PATIENTS_START" 
    static LOAD_PATIENTS_FULFIL = "LOAD_PATIENTS_FULFIL" 

    // static loadPatientsStart = () => {
    //     store.dispatch({
    //         type: 'LOAD_PATIENTS_FULFIL',
    //         payload: {}
    //     })
    // }
    
    // static loadPatientsFulfil = (payload) => {
    //     store.dispatch({
    //         type: this.LOAD_PATIENTS_FULFIL,
    //         payload: payload
    //     })
    // }

    // static addPatient = (payload) => {
    //     store.dispatch({
    //         type: this.ADD_PATIENT,
    //         payload: payload
    //     })
    // }

    // static addPatientVisit = (payload) => {
    //     store.dispatch({
    //         type: this.ADD_PATIENT_VISIT,
    //         payload: payload
    //     })
    // }

    // static removePatient = (payload) => {
    //     store.dispatch({
    //         type: this.REMOVE_PATIENT,
    //         payload: payload
    //     })
    // }

    
}