import actionTypes from '../actionTypes/constants.ts';

const initState = {
  user: { isLogin: false },
};

function homeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.Home.LOADING_DATA:
      return { ...state, user: { ...action.data } };
    case actionTypes.Home.LOG_OUT:
      return { ...state, user: { ...action.data } };
    default:
      return state;
  }
}

export default homeReducer;
