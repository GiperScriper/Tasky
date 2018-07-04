import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '@/config/constants';

const initialState = {
  isPending: false,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { isPending: true };

    case LOGIN_SUCCESS:
      return { user: action.payload, isPending: false, error: null };

    case LOGIN_FAILED:
      return { error: action.payload, isPending: false };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};
