import { connect } from 'react-redux';

import TreeHouseShow from './tree_house_show';
import { fetchCurrentTreeHouse } from '../../actions/tree_house_actions';

const mapStateToProps = ( { treeHouses } ) => ({
  treeHouses
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentTreeHouse: id => dispatch(fetchCurrentTreeHouse(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseShow);
