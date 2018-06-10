class AuthService {
  setToken(token = '') {
    window.localStorage.setItem('token', token);
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('token');
  }

  logOut(cb) {
    window.localStorage.clear();
    cb();
  }
}

export default new AuthService();
