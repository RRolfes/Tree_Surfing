import { connect } from 'react-redux';

import TreeHouseIndex from './tree_house_index.jsx';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
import { fetchTreeHouses } from '../../actions/tree_house_actions';


const mapStateToProps = ( { treeHouses, session } ) => ({
  treeHouses,
  session
});

const mapDispatchToProps = (dispatch) => ({
  fetchTreeHouses: (bounds) => dispatch(fetchTreeHouses(bounds)),
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseIndex);
