import { connect } from 'react-redux';
import fetchUser from '../../actions/user_actions/fetchUser';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id))
});
