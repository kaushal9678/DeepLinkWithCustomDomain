import {call, put, takeEvery} from 'redux-saga/effects'
import { getScreams } from '../api/APIClient';
import WebService from '../api/Webservice';
import {GET_SCREAMS, SET_SCREAMS} from './actions'

const webserice = new WebService();
function* handler(){
    yield takeEvery(GET_SCREAMS,getAllScreams);
}

/* function* getAllScreams(action: any) {
console.log("action ===",action);
   try {
       //API Call
       yield put(getScreams());
   } catch (error) {
       //Handle error
   }
} */
function* getAllScreams(dispatch:any) {
    try {
       // const screams = yield call(webserice.makeGetRequest('/screams'));
        //console.log('screams==',screams);
        //dispatch({ type: 'PRODUCTS_RECEIVED', products })
    } catch (error) {
        console.error('error==',error)
    }
  
  }

export {handler};