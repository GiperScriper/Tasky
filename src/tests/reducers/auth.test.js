import authReducer from '@/reducers/auth';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '@/config/constants';

describe('Auth reducer', () => {
  it('should setup initialState auth state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      isPending: false,
      userId: null,
      error: null,
    });
  });

  it('should set isPeding to true', () => {
    const state = authReducer(undefined, { type: LOGIN_START });
    expect(state.isPending).toBe(true);
  });

  it('should set User object, error to null, isPending to false ', () => {
    const state = authReducer(undefined, { type: LOGIN_SUCCESS, payload: { userId: 'testid' } });
    expect(Object.keys(state.userId).length).toBeTruthy();
    expect(state.error).toBe(null);
    expect(state.isPending).toBe(false);
  });

  it('should set error object, isPending to false', () => {
    const state = authReducer(undefined, { type: LOGIN_FAILED, payload: { error: 'error message' } });
    expect(Object.keys(state.error).length).toBeTruthy();
    expect(state.isPending).toBe(false);
  });
});
