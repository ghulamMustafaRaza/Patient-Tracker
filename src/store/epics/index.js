import { PatientActions } from '../actions'
import { Observable } from "rxjs"
import 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class PatientEpics {
    constructor() { }
    /*
        static addPatients = (actions$) => {
        return actions$.ofType(PatientActions.ADD_PATIENT)
            .mergeMap((actions$) => {
                return Observable.ajax({
                    url: 'https://powerful-gorge-42651.herokuapp.com/add-patient',
                    method: 'POST',
                    responseType: 'ajax',
                    body: actions$.payload  
                })
                .do((data) => {
                    console.log("data >> ", data);
                })
                .pluck("response")
                    .switchMap((data) => {
                        return Observable.of(PatientActions.addPatientFulfil(data))
                    })
                })
                .catch((err) => {
                    return Observable.of({
                        type: 'ADD_PATIENT_FAIL',
                        payload: {err}
                    })
                })
            }
            */
    static addPatients = (actions$) =>{
        console.log(actions$)
        return(
        actions$.ofType(PatientActions.ADD_PATIENT)
            .switchMap(({payload}) => {
                Observable.ajax.post('https://powerful-gorge-42651.herokuapp.com/add-patient', payload)
                    .map(payload => PatientActions.addPatientFulfil(payload.response))
                    .subscribe(data=>console.log(data));
            })
            .catch((err) => {
                    return Observable.of({
                        type: 'ADD_PATIENT_FAIL',
                        payload: {}
                    })
            }))}


    static testHello = (action$) =>
        action$.ofType(PatientActions.TEST_HELLO)        
            .switchMap(({payload})=>
                Observable.of({type:PatientActions.AFTER_TEST_HELLO,payload: {data:"After test"}})
            );
    
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
                Observable.ajax.post('https://powerful-gorge-42651.herokuapp.com/add-patient-visit', payload)
                    .map(payload => [
                        PatientActions.addPatientVisitFulfil(payload.response),
                        PatientActions.loadPatientsFulfil(payload.response),
                    ])
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
                Observable.ajax.post('https://powerful-gorge-42651.herokuapp.com/remove-patient', payload)
                    .map(payload => [
                        PatientActions.loadPatientsFulfil(payload.response),
                        PatientActions.removePatientFulfil(payload.response)
                    ])
                        .subscribe(data=>console.log(data));
            })
            .catch((err) => {
                return Observable.of({
                    type: 'REMOVE_PATIENTS_FAIL',
                    payload: {err}
                })
            })

}