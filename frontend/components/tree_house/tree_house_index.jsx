import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseContainer from './tree_house_container';
import Map from './tree_house_map';

class TreeHouseIndex extends React.Component {

  componentWillMount() {
    const defaultBounds = {
      northEast: { lat: 38.5, lng: -120.7 },
      southWest: { lat: 36.5, lng: -122.7 }
    };
    this.props.updateFilter(defaultBounds);
  }

  render() {
    const treeHouses = this.props.treeHouses;
    // const
    // if (Object.keys(treeHouses).length !== 0) {
    return (
      <div>

        <div className="nav-bar">
          <h1>Tree Surfing</h1>
          <div className="nav-bar-greeting-and-logout">
            <h2>Hi, {this.props.session.currentUser.full_name}</h2>
            <button
              className="header-button"
              onClick={this.props.logout}>
              Log Out
            </button>
          </div>
        </div>

        <div className="index-map-container">
          <div className="tree-house-index">
            <ul className="index-list">
              {Object.keys(treeHouses).map((key, idx) =>
                <li key={idx} className="tree-house-index-item" >
                  <img src={treeHouses[key].image_url}></img>
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
            <Map
              treeHouses={treeHouses}
              updateFilter={this.props.updateFilter}
              />
          </div>

          <div className="logout-button">
          </div>
        </div>
      </div>
    );
    // } else {
    //   return(
    //     <div> Loading </div>
    //   );
    // }
  }
}

export default withRouter(TreeHouseIndex);
