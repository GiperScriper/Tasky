export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggedIn: true,
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
