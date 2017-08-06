import { PatientActions } from '../actions'
import { Observable } from "rxjs"
import 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class PatientEpics {
    constructor() { }
    static addPatients = (actions$) =>{
        console.log(actions$)
        return(
        actions$.ofType(PatientActions.ADD_PATIENT)
            .switchMap(({payload}) => {             
                Observable.ajax.get('https://powerful-gorge-42651.herokuapp.com/add-patient', payload)
                    .map(payload => PatientActions.addPatientFulfil(payload.response))
                    .subscribe(data=>console.log(data));
                    return Observable.of({
                        type: 'ADD_PATIENT_FAIL',
                        payload: {}
                    })
            })
            .catch((err) => {
            }))}

    static loadPatients = (actions$) =>
        actions$.ofType(PatientActions.LOAD_PATIENTS_START)
            .switchMap(({payload}) => {
                Observable.ajax.get('https://powerful-gorge-42651.herokuapp.com/get-patients')
                    .map(payload => PatientActions.loadPatientsFulfil(payload.response))
                    .subscribe(data=>console.log(data));
                    
            })
            .catch((err) => {
                return Observable.of({
                        type: 'LOAD_PATIENTS_FAIL',
                        payload: {}
                    })
                console.log(PatientActions.LOAD_PATIENTS_START+" error ",err)
            })


    static addPatientsVisit = (actions$) =>
        actions$.ofType(PatientActions.ADD_PATIENT_VISIT)
            .switchMap(({payload}) => {
                Observable.ajax.post('https://powerful-gorge-42651.herokuapp.com/add-patient-visit', {id: payload.id, visit: JSON.stringify(payload.visit)})
                    .map(payload => PatientActions.addPatientVisitFulfil(payload.response))
                    .subscribe(data=>console.log(data));
            })
            .catch((err) => {
                return Observable.of({
                    type: 'ADD_PATIENT_VISIT_FAIL',
                    payload: {err}
                })
            })

    static removePatient = (actions$) =>
        actions$.ofType(PatientActions.REMOVE_PATIENT)
            .switchMap(({payload}) => {
                Observable.ajax.post('https://powerful-gorge-42651.herokuapp.com/remove-patient', {id: payload.id})
                    .map(payload => PatientActions.removePatientFulfil(payload.response))
                    .subscribe(data=>console.log(data));
            })
            .catch((err) => {
                return Observable.of({
                    type: 'REMOVE_PATIENTS_FAIL',
                    payload: {err}
                })
            })

}