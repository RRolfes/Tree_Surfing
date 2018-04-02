import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseTile from './tree_house_tile';

class TreeHouseTileIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouses = this.props.treeHouses;
    return(
      <div className="tree-house-tile-index-container">
        {Object.keys(treeHouses).map((treeHouseId) =>
          <TreeHouseTile treeHouse={treeHouses[treeHouseId]} />
        )}
      </div>
    );
  }
}

export default TreeHouseTileIndex;
