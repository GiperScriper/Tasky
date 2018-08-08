import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '@/config/constants';
import { firebase } from '@/firebase';
import authService from '@/helpers/authService';

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = error => ({
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

export const verifyAuth = () => dispatch => {
  dispatch(loginStart());
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(loginSuccess(user.uid));
    }

    // TO-DO logout
  });
};
