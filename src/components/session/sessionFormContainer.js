import { connect } from 'react-redux';
import { loginUser } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapStateToProps = ({events, session}) => ({
  events
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
