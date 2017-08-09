import { connect } from 'react-redux';
import { facebookAuth } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  facebookAuth: () => dispatch(facebookAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
