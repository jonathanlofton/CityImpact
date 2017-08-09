import { connect } from 'react-redux';
import { requestAllEvents, requestSingleEvent } from '../../actions/eventActions';
import { selectAllEvents } from '../../reducers/selectors';
import EventIndex from './eventIndex';

const mapStateToProps = state => ({
  songs: selectAllEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: events => dispatch(requestAllEvents({ events })),
  requestSingleEvent: event => dispatch(requestSingleEvent({ event }))
});

connect(mapStateToProps, mapDispatchToProps)(EventIndex);
