import authService from '@/helpers/authService';

describe('Auth Service', () => {
  const testToken = 'hashtokenstring';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should set token to localStorage', () => {
    authService.setToken(testToken);
    expect(localStorage.token).toBe(testToken);
  });

  it('should set empty token value to localStorage', () => {
    authService.setToken();
    expect(localStorage.token).toMatch('');
  });

  it('should return isAuthenticated true value', () => {
    authService.setToken(testToken);
    expect(authService.isAuthenticated()).toBe(true);
  });

  it('should return isAuthenticated false value', () => {
    expect(authService.isAuthenticated()).toBe(false);
  });

  it('should return clear localStorage and run callback function', () => {
    const mockCb = jest.fn();
    authService.setToken(testToken);
    authService.logout(mockCb);

    expect(mockCb).toHaveBeenCalledTimes(1);
    expect(localStorage).toEqual({});
  });
});
