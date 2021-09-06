import { ACTION_TYPES } from 'Store/actionTypes';

const initialState = {
  allList: [],
  counts: 0,
  user: {},
  editUserState: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS_LIST:
      return {
        ...state,
        allList: action.payload.result,
        counts: action.payload.counts
      };
    case ACTION_TYPES.GET_EDIT_USER:
      return {
        ...state,
        user: action.payload,
        editUserState: null
      };
    case ACTION_TYPES.EDIT_USER_SUCCESS:
      return {
        ...state,
        editUserState: true
      };
    case ACTION_TYPES.EDIT_USER_FAILED:
      return {
        ...state,
        editUserState: false
      };
    case ACTION_TYPES.EDIT_USER_REQUEST:
      return {
        ...state,
        editUserState: null,
        user: {}
      };

    default:
      return state;
  }
};
