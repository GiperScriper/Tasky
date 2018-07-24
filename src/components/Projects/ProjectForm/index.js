import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { createProject } from '@/actions/project';
import ProjectForm from './ProjectForm';
import { getRandomColor } from '@/helpers/getRandomColor';
import { colors } from '@/components/Projects/constants';

export const onSubmit = props => data => {
  const { createProject, toggleItemView, userId } = props;
  const color = getRandomColor(colors);

  createProject({
    project: { ...data, userId, color },
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
