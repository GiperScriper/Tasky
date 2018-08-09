import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '@/config/constants';
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

export const logout = () => ({
  type: LOGOUT,
});

export const login = ({ login, password }) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(login, password);
    authService.setToken(response.user.qa);

    return Promise.resolve();
  } catch (error) {
    dispatch(loginFailed(error));
  }
};

export const verifyAuth = renderApp => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    user ? dispatch(loginSuccess(user.uid)) : dispatch(logout());
    renderApp();
  });
};

export const startLogout = () => () => firebase.auth().signOut();
