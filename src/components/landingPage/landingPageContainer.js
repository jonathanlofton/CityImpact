import { connect } from 'react-redux';
import { requestAllEvents, requestSingleEvent, createEvent } from '../../actions/eventActions';
import { selectAllEvents } from '../../reducers/selectors';
import { receiveCurrentUser } from '../../actions/sessionActions';
import LandingPage from './landingPage';



const mapStateToProps = state => (
  {
  events: selectAllEvents(state),
  currentUser: state.session.currentUser,
  user: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: events => dispatch(requestAllEvents({ events })),
  requestSingleEvent: event => dispatch(requestSingleEvent({ event })),
  createEvent: event => dispatch(createEvent(event)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
