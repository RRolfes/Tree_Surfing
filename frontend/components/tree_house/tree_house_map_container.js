import { connect } from 'react-redux';

import Map from './tree_house_map';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = ( { treeHouses, location } ) => ({
  treeHouses,
  location
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (bounds) => dispatch(updateFilter(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
