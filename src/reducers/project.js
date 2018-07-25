import {
  PROJECTS_GET_START,
  PROJECTS_GET_SUCCESS,
  PROJECTS_GET_FAILED,
  PROJECT_SAVE_START,
  PROJECT_SAVE_SUCCESS,
  PROJECT_SAVE_FAILED,
} from '@/config/constants';

const initialState = {
  isPending: false,
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_GET_START:
      return { isPending: true };

    case PROJECTS_GET_SUCCESS:
      return { data: action.payload, isPending: false, error: null };

    case PROJECT_SAVE_START:
      return { isPending: true };

    case PROJECT_SAVE_SUCCESS:
      return { data: [...state.data, action.payload], isPending: false, error: null };

    case PROJECT_SAVE_FAILED:
      return { error: action.payload, isPending: false };

    default:
      return state;
  }
};
