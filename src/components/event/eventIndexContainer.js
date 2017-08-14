import { connect } from 'react-redux';
import { requestAllEvents, requestSingleEvent } from '../../actions/eventActions';
import { selectAllEvents } from '../../reducers/selectors';
import EventIndex from './eventIndex';
import updateUser from '../../actions/sessionActions';
import updateEvent from '../../actions/eventActions';

const mapStateToProps = state => ({
  events: selectAllEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: events => dispatch(requestAllEvents({ events })),
  requestSingleEvent: event => dispatch(requestSingleEvent({ event })),
  updateUser: user => dispatch(updateUser(user)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
