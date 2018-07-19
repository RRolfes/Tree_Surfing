import React from 'react';
import TreeHouseTile from './tree_house_tile';

class TreeHouseTileIndex extends React.Component {
  render() {
    const treeHouses = this.props.treeHouses;
    return(
      <div className="tree-house-tile-index-container">
        {Object.keys(treeHouses).map((treeHouseId) =>
          <TreeHouseTile key={treeHouseId} treeHouse={treeHouses[treeHouseId]} />
        )}
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="filler"></div>
      </div>
    );
  }
}

export default TreeHouseTileIndex;
