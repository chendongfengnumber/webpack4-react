import { homeLoadData, logOut } from '../actions/homeActions';

export function loadHomeData() {
  const userInfo = { name: 'chen', age: 18 };
  return (dispatch, getState) => {
    const { user } = getState().homeReducers;
    const data = {};
    Object.assign(data, { ...userInfo, isLogin: true });
    dispatch(homeLoadData(data));
  };
}

export function logOutUser() {
  return (dispatch) => {
    const data = {};
    Object.assign(data, { isLogin: false });
    dispatch(logOut(data));
  };
}
