
import { put, takeLatest, call } from 'redux-saga/effects';


import { setTest } from '../../actions/testAction';

function* workerGetRegistrationSaga() {
    console.log('test')

}

export default function* watchGetRegistrationSaga() {
  yield takeLatest('GET_TEST', workerGetRegistrationSaga);
}
