import { connect } from 'react-redux';

import Map from './tree_house_map';
import { updateFilter } from '../../actions/filter_actions';
import { resetLocation } from '../../actions/search_actions';



const mapStateToProps = ( { treeHouses, location } ) => ({
  treeHouses,
  location
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  resetLocation: () => (dispatch(resetLocation()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
