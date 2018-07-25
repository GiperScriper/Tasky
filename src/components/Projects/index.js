import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getProjects } from '@/actions/project';
import ProjectList from './ProjectList';
import withSpinner from '@/hocs/withSpinner';

const mapStateToProps = ({ projects }) => ({
  projects: projects.data,
  isPending: projects.isPending,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getProjects();
    },
  }),
  withSpinner
)(ProjectList);
