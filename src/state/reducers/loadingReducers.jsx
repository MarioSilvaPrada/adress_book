import * as TYPES from 'state/actions/types';

const initialState = { loading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_IS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
