import { connect } from 'react-redux';
import InitialScreen from './initialScreen';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
