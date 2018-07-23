import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { createProject } from '@/actions/project';
import ProjectForm from './ProjectForm';

export const onSubmit = props => data => {
  const { createProject, toggleItemView, userId } = props;
  createProject({
    project: { ...data, userId },
    toggleItemView,
  });
};

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId,
});

const mapDispatchToProps = dispatch => ({
  createProject: data => dispatch(createProject(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onSubmit,
  })
)(ProjectForm);
