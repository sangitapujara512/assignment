const initialState = {
  test: [],
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEST':
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
}
