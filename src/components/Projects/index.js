import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getProjects } from '@/actions/project';
import ProjectList from './ProjectList';

const mapStateToProps = ({ projects }) => ({
  projects: projects.data,
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
  })
)(ProjectList);
