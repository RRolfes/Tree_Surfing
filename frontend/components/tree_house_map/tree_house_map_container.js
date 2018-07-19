import { connect } from 'react-redux';

import Map from './tree_house_map';
import { updateFilter } from '../../actions/filter_actions';
import { resetLocation } from '../../actions/search_actions';
import { fetchTreeHouses } from '../../actions/tree_house_actions';


const mapStateToProps = ( { treeHouses, location, filters } ) => ({
  treeHouses,
  location,
  filters
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  resetLocation: () => (dispatch(resetLocation())),
  fetchTreeHouses: (bounds) => dispatch(fetchTreeHouses(bounds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
