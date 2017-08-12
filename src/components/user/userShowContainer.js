import { connect } from 'react-redux';
import UserShow from './userShow';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
