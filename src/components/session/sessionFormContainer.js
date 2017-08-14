import { connect } from 'react-redux';
import { loginUser, receiveCurrentUser } from '../../actions/sessionActions';
import { requestAllEvents } from '../../actions/eventActions';
import SessionForm from './sessionForm';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  events: state.events.entities
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
