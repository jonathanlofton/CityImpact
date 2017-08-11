import { connect } from 'react-redux';
import { requestAllEvents, requestSingleEvent, createEvent } from '../../actions/eventActions';
import { selectAllEvents } from '../../reducers/selectors';
import LandingPage from './landingPage';

const mapStateToProps = state => ({
  events: selectAllEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: events => dispatch(requestAllEvents({ events })),
  requestSingleEvent: event => dispatch(requestSingleEvent({ event })),
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
