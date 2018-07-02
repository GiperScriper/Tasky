import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '@/config/constants';
import { loginStart, loginSuccess, loginFailed } from '@/actions/auth';

describe('Auth action creators', () => {
  it('should setup loginStart action object', () => {
    const action = loginStart();
    expect(action.type).toBe(LOGIN_START);
  });

  it('should setup loginSuccess action object', () => {
    const user = { name: 'test', id: 12 };
    const action = loginSuccess(user);
    expect(action.type).toBe(LOGIN_SUCCESS);
    expect(Object.keys(action.payload).length).toBeTruthy();
  });

  it('should setup loginFailed action object', () => {
    const error = { message: 'something wrong happens' };
    const action = loginFailed(error);
    expect(action.type).toBe(LOGIN_FAILED);
    expect(Object.keys(action.payload).length).toBeTruthy();
  });
});
