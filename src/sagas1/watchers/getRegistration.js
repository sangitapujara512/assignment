import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_REGISTRATION_SAGA,
  // SET_ERROR_STATE,
} from '../../constants';
import { setRegistration } from '../../actions/registrationAction';
// import { getRegistration } from '../../api/registrationApi';
getRegistration=(firstName,    
  phoneNumber,
  email,      
  userName)=>{
    const registration= {
      firstName,    
  phoneNumber,
  email,      
  userName
    }
    return registration


}

function* workerGetRegistrationSaga({
  payload: {
    firstName,    
    phoneNumber,
    email,      
    userName,      
  },
}) {
  
  try {

    const registration = yield call(
      getRegistration,
      firstName,    
    phoneNumber,
    email,      
    userName, 
    );

    // const registration = {      
    // firstName,    
    // phoneNumber,
    // email,      
    // userName,
    // }
    
    yield put(setRegistration(registration));
  } catch (err) {
    // if (err.response && err.response.data) {
    //   const errorData = err.response.data;
    //   yield put({ type: SET_ERROR_STATE, errorData });
    // }
  }
}

export default function* watchGetRegistrationSaga() {
  yield takeLatest(GET_REGISTRATION_SAGA, workerGetRegistrationSaga);
}
