import * as TYPES from 'state/actions/types';
import api from 'api/api';

export const setLoading = (bool) => (dispatch) => {
  dispatch({
    type: TYPES.SET_IS_LOADING,
    payload: bool,
  });
};

export const getUsers = () => async (dispatch) => {
  const res = await api.get('?results=100');

  dispatch({
    type: TYPES.GET_USERS,
    payload: res.data.results,
  });
};

export const fetchMore = () => async (dispatch, getState) => {
  // get filter nationality
  const userNat = getState().users.countryFilter;

  const res = await api.get(`?results=50&nat=${userNat.toLowerCase()}`);

  const currentUsers = getState().users.users;
  // spread new data with current users array
  const newUsersArr = [...currentUsers, ...res.data.results];

  // go to top
  window.scrollTo(0, 0);

  dispatch({
    type: TYPES.FETCH_MORE,
    payload: newUsersArr,
  });
};

export const filterByName = (input) => (dispatch) => {
  const searchInput = input;

  dispatch({
    type: TYPES.FILTER_BY_NAME,
    payload: searchInput,
  });
};

export const filterByCountry = (value) => (dispatch) => {
  dispatch({
    type: TYPES.FILTER_BY_COUNTRY,
    payload: value,
  });
};
