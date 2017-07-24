import { connect } from 'react-redux';

import TreeHouseIndex from './tree_house_index.jsx';
import { fetchTreeHouses } from '../../actions/tree_house_actions';

const mapStateToProps = ( { treeHouses } ) => ({
  treeHouses
});

const mapDispatchToProps = (dispatch) => ({
  fetchTreeHouses: () => dispatch(fetchTreeHouses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseIndex);
