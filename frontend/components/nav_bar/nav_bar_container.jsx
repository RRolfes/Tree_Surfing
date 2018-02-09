import {connect} from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ( { treeHouses, session } ) => ({
  treeHouses,
  session
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
