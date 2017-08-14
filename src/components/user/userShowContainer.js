import { connect } from 'react-redux';
import UserShow from './userShow';
import { selectHostedEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  hostedEvents: selectHostedEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
