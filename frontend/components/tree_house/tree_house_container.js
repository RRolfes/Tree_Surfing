import { connect } from 'react-redux';

import TreeHouseIndex from './tree_house_index.jsx';
import { fetchTreeHouses } from '../../actions/tree_house_actions';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = ( { treeHouses } ) => ({
  treeHouses
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  fetchTreeHouses: () => dispatch(fetchTreeHouses()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseIndex);
