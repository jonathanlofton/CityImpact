import { connect } from 'react-redux';
import EventForm from './eventForm';
import {
  requestAllEvents,
  createEvent
} from '../../actions/eventActions';

const mapStateToProps = (state, { match }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
