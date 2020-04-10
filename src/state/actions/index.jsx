import * as TYPES from 'state/actions/types';
import api from 'api/api';

export const setLoading = (bool) => (dispatch) => {
  dispatch({
    type: TYPES.SET_IS_LOADING,
    payload: bool,
  });
};

export const getUsers = () => async (dispatch) => {
  const res = await api.get();

  dispatch({
    type: TYPES.GET_USERS,
    payload: res.data.results,
  });
};

export const filterByName = (input) => (dispatch) => {
  const searchInput = input;

  dispatch({
    type: TYPES.FILTER_BY_NAME,
    payload: searchInput,
  });
};
