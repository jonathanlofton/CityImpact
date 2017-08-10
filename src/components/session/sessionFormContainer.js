import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
