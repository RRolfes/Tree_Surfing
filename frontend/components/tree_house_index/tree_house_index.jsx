import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseMapContainer from '../tree_house_map/tree_house_map_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

let count = 0;

class TreeHouseIndex extends React.Component {
  constructor(props) {
    super(props);

    this.treeHouses = this.treeHouses.bind(this);
  }

  treeHouses() {

  }

  render() {

    const treeHouses = this.props.treeHouses;

    return (
      <div className="index-page-master">
        <div className="index-map-container">
          <div className="tree-house-index">
            <ul className="index-list">
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
            </ul>
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
