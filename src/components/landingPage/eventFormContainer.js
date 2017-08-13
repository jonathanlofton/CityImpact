import { connect } from 'react-redux';
import EventForm from './eventForm';
import { createEvent } from '../../actions/eventActions';
import { updateUser } from '../../actions/sessionActions';

const mapStateToProps = ({events, session}) => ({
  currentUser: session.currentUser,
  events: events
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
