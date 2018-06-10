class AuthService {
  setToken(token = '') {
    window.localStorage.setItem('token', token);
  }
}

export default new AuthService();
