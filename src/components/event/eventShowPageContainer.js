import { connect } from 'react-redux';
import EventShowPage from './eventShowPage';
import { updateUser } from '../../actions/sessionActions';
import { updateEvent } from '../../actions/eventActions';

const mapStateToProps = ({events, session}) => ({
  currentUser: session.currentUser,
  currentEvent: events.currentEvent
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShowPage);
