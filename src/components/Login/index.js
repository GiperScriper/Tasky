import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { login } from 'actions/auth';
import loginForm from './LoginForm';

const onSubmit = props => data => {
  const { login, history } = props;

  login(data).then(() => {
    history.push('/');
  });
};

const mapStateToProps = ({ auth }) => ({
  isPending: auth.isPending,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onSubmit,
  })
)(loginForm);
