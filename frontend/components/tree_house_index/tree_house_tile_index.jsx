import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class TreeHouseTileIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouses = this.props.treeHouses;
    return(
      <div className="tree-house-tile-index-container">
        {Object.keys(treeHouses).map((key, idx) =>
          <li key={idx} className="tree-house-index-item" >
            <Link to={`/treehouses/${key}`}>
              <img className=".map-img" src={treeHouses[key].image_url}></img>
            </Link>
            <ul className="tree-house-info">
              <li>{treeHouses[key].name}</li>
              <li>{treeHouses[key].city}</li>
              <li>{treeHouses[key].country}</li>
            </ul>
          </li>
        )}
      </div>
    );
  }
}

export default TreeHouseTileIndex;
