import {
  SET_REGISTRATION,
  GET_REGISTRATION_SAGA,
} from '../constants';

// Added for Registration
export function setRegistration(registration) {  
  return {
    type: SET_REGISTRATION,
    payload: {
      registration,
    },
  };
}
