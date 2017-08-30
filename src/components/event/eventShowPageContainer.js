import { connect } from 'react-redux';
import EventShowPage from './eventShowPage';
import { updateUser } from '../../actions/sessionActions';
import { updateEvent, requestSingleEvent } from '../../actions/eventActions';

const mapStateToProps = ({events, session}) => ({
  currentUser: session.currentUser,
  currentEvent: events.currentEvent
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateEvent: event => dispatch(updateEvent(event)),
  requestSingleEvent: id => dispatch(requestSingleEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShowPage);
