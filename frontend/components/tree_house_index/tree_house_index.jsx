import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseMapContainer from '../tree_house_map/tree_house_map_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import TreeHouseTileIndex from './tree_house_tile_index';

class TreeHouseIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const treeHouses = this.props.treeHouses;
    let treeHouseNumber = Object.keys(treeHouses).length;
    let message;

    if (treeHouseNumber === 0) {
      message = (
        <div className="no-results">
          <div className="no-results-header"><span>No results</span></div>
          <div className='search-suggestions'>
            <span>Try adjusting your search. Here are some ideas: </span>
            <ul>
              <li>Change your filters</li>
              <li>Zoom out on the map</li>
              <li>Search for a broader area</li>
            </ul>
          </div>
        </div>
      );
    }

    return (

      <div className="index-page-master">
        <div className="index-map-container">
          <div className="tree-house-index">
            <ul className="index-list">
              <TreeHouseTileIndex treeHouses={treeHouses}/>
            </ul>
            {message}
          </div>


          <div className="map-container">
            <TreeHouseMapContainer
              />
          </div>

          <div className="logout-button">
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(TreeHouseIndex);
