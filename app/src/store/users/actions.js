import axios from 'axios';

import { ACTION_TYPES } from 'Store/actionTypes';

const APIURL = 'http://localhost:4000';

export const getAllUsers = (sortKey, subscribed, curPage) => {
  return async dispatch => {
    console.log(sortKey, subscribed, curPage);
    const result = await axios.get(
      `${APIURL}/users/all?sort=${sortKey}&subscribed=${subscribed}&&curpage=${curPage}`
    );
    dispatch({
      type: ACTION_TYPES.GET_USERS_LIST,
      payload: result.data
    });
  };
};
export const getEditUser = id => {
  return async dispatch => {
    dispatch({
      type: ACTION_TYPES.EDIT_USER_REQUEST
    });

    const url = `${APIURL}/users/${id}`;
    const result = await axios.get(url);
    dispatch({
      type: ACTION_TYPES.GET_EDIT_USER,
      payload: result.data[0]
    });
  };
};

export const updateUser = (id, data) => {
  return async dispatch => {
    try {
      const userData = { id: id, data: data };
      const url = `${APIURL}/users/update`;
      const result = await axios.post(url, userData);
      if (result.status === 200) {
        dispatch({
          type: ACTION_TYPES.EDIT_USER_SUCCESS
        });
      }
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: ACTION_TYPES.EDIT_USER_FAILED
      });
    }
  };
};
