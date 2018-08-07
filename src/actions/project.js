import {
  PROJECTS_GET_START,
  PROJECTS_GET_SUCCESS,
  PROJECTS_GET_FAILED,
  PROJECT_SAVE_START,
  PROJECT_SAVE_SUCCESS,
  PROJECT_SAVE_FAILED,
} from '@/config/constants';

import db from '@/firebase';

export const getProjectsStart = () => ({
  type: PROJECTS_GET_START,
});

export const getProjectsSuccess = projects => ({
  type: PROJECTS_GET_SUCCESS,
  payload: projects,
});

export const getProjectsFailed = error => ({
  type: PROJECTS_GET_FAILED,
  payload: error,
});

export const createProjectStart = () => ({
  type: PROJECT_SAVE_START,
});

export const createProjectSuccess = project => ({
  type: PROJECT_SAVE_SUCCESS,
  payload: project,
});

export const createProjectFailed = error => ({
  type: PROJECT_SAVE_FAILED,
  payload: error,
});

export const createProject = data => async dispatch => {
  const { project, toggleItemView } = data;
  dispatch(createProjectStart);

  try {
    const response = await db.ref('projects').push(project);
    dispatch(
      createProjectSuccess({
        id: response.key,
        ...project,
      })
    );
  } catch (error) {
    dispatch(createProjectFailed(error));
  } finally {
    toggleItemView();
  }
};

export const getProjects = () => async dispatch => {
  dispatch(getProjectsStart());

  try {
    const snapshot = await db.ref('projects').once('value');
    const data = snapshot.val();
    const projects = data ? Object.keys(data).map(id => ({ id, ...data[id] })) : [];

    dispatch(getProjectsSuccess(projects));
  } catch (error) {
    dispatch(getProjectsFailed(error));
  }
};
