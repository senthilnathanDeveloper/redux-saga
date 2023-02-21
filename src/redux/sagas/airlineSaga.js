import { takeEvery,put,all,delay,fork,call } from '@redux-saga/core/effects'
import { loadGetApi, loadGetApiId } from '../Api/api';
import { loadAirlineGetApiFailure, loadAirlineGetApiIdFailure, loadAirlineGetApiIdSuccess, loadAirlineGetApiSuccess } from '../slice/airlineSlice';

// GET-API-CALLING

export function* onLoadAirline(){
    yield takeEvery ("airline/loadAirlineGetApi",onLoadAirlineAsync)
}

export function* onLoadAirlineAsync() {
    try{
        const response = yield call(loadGetApi);
        if(response.status === 200){
            yield delay(500);
            yield put (loadAirlineGetApiSuccess(response.data));
        }
    }catch(error){
        yield put (loadAirlineGetApiFailure(error.response.data));
    }
}


// GET-API-CALLING -ID BASED

export function* onLoadAirlineId(){
    yield takeEvery ("airline/loadAirlineGetApiId",onLoadAirlineIdAsync)
}

export function* onLoadAirlineIdAsync() {
    try{
        const response = yield call(loadGetApiId);
        if(response.status === 200){
            yield delay(500);
            yield put (loadAirlineGetApiIdSuccess(response.data));
        }
    }catch(error){
        yield put (loadAirlineGetApiIdFailure(error.response.data));
    }
}

const airlineSage = [
    fork(onLoadAirline),
    fork(onLoadAirlineId)
]

export default function* rootSaga(){
    yield all([...airlineSage])
}