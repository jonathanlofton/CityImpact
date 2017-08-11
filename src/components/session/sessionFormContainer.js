import { connect } from 'react-redux';
import { loginFacebook } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapStateToProps = ({events}) => ({
  events
});

const mapDispatchToProps = dispatch => ({
  loginFacebook: data => dispatch(loginFacebook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
