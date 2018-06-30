import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from 'config/constants';
import { firebase } from '../firebase';
import authService from 'helpers/authService';

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const login = ({ login, password }) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(login, password);
    dispatch(loginSuccess(response.user.uid));
    authService.setToken(response.user.qa);

    return Promise.resolve();
  } catch (error) {
    dispatch(loginFailed(error));
  }
};
