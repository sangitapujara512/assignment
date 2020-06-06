import { SET_REGISTRATION } from '../constants';

const initialState = {
  registration: [],
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_REGISTRATION:
      return {
        ...state,
        registration: action.payload,
      };
    default:
      return state;
  }
}
