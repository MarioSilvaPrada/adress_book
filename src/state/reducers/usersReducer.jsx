import * as TYPES from 'state/actions/types';

export const intialState = {
  users: [],
  searchFilter: '',
  countryFilter: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case TYPES.GET_USERS:
      return { ...state, users: action.payload };
    case TYPES.FETCH_MORE:
      return { ...state, users: action.payload };
    case TYPES.FILTER_BY_NAME:
      return { ...state, searchFilter: action.payload };
    case TYPES.FILTER_BY_COUNTRY:
      return { ...state, countryFilter: action.payload };
    default:
      return state;
  }
};
