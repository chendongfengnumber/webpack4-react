import actionTypes from '../actionTypes/constants.ts';

export function homeLoadData(data) {
  return {
    type: actionTypes.Home.LOADING_DATA,
    data
  }
}

export function logOut(data) {
  return {
    type: actionTypes.Home.LOG_OUT,
    data
  }
}
