import {createStore, applyMiddleware} from 'redux'
import {patientReducer} from './reducers/patientReducer'
import {AsyncStorage} from 'react-native'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
const store =  createStore(patientReducer, {}, applyMiddleware(thunk, logger));
    // AsyncStorage.getItem('patient', (err, data) => {

    // console.log('get Data Local', data)
    // }).done()
    AsyncStorage.getItem('patients', (err, result) => {
        console.log(result);
        const value = JSON.parse(result); 
        console.log(value !== null && typeof(value) === 'object')
        if (value !== null && typeof(value) === 'object'){
            store.dispatch({
                type: 'SET_PATIENTS',
                payload: value.patients
            })
        console.log('localItem,',value)
        }
        store.dispatch({
            type: 'CNG_LOAD_STATE'
        })
    });
//   AsyncStorage.getItem('patient').then((v) => {
//     const value = JSON.parse(v); 
//     console.log(value !== null && typeof(value) === 'object')
//     if (value !== null && typeof(value) === 'object'){
//         store.dispatch({
//             type: 'SET_PATIENTS',
//             payload: value
//         })
//       console.log('localItem,',value)
//     }
//     store.dispatch({
//         type: 'CNG_LOAD_STATE'
//     })
//   })
// try {
// } catch (error) {
//   alert('err'+JSON.stringify(error))
// }

export default store;