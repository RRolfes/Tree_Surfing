import React from 'react';
import TreeHouseMapContainer from '../tree_house_map/tree_house_map_container';
import TreeHouseTileIndex from './tree_house_tile_index';

class TreeHouseIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const treeHouses = this.props.treeHouses;
    let treeHouseNumber = Object.keys(treeHouses).length;
    let noResultsMessage;

    if (treeHouseNumber === 0) {
      noResultsMessage = (
        <div className="no-results">
          <div className="no-results-header"><span>No results</span></div>
          <div className='search-suggestions'>
            <span>Try adjusting your search. Here are some ideas: </span>
            <ul>
              <li>Change your filters</li>
              <li>Zoom out on the map</li>
              <li>Search a broader area</li>
            </ul>
          </div>
        </div>
      );
    }

    return (

      <div className="index-page-master">
        <div className="index-map-container">
          <div className="tree-house-index">
            <TreeHouseTileIndex treeHouses={treeHouses}/>
            {noResultsMessage}
          </div>
          <div className="map-container">
            <TreeHouseMapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default TreeHouseIndex;
