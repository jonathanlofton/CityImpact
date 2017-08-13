import { connect } from 'react-redux';
import { loginUser, receiveCurrentUser } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapStateToProps = ({events}) => ({
  events
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
