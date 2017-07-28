import { connect } from 'react-redux';

import TreeHouseShow from './tree_house_show';
import { fetchCurrentTreeHouse } from '../../actions/tree_house_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ( { treeHouses, user, session } ) => ({
  treeHouses,
  user,
  session
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentTreeHouse: id => dispatch(fetchCurrentTreeHouse(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseShow);
