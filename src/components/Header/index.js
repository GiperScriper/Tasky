import { connect } from 'react-redux';
import { startLogout } from '@/actions/auth';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
