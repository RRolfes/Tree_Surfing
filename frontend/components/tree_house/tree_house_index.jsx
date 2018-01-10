import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseMapContainer from '../tree_house_map/tree_house_map_container';
import SearchBarContainer from '../search_bar/search_bar_container';

class TreeHouseIndex extends React.Component {
  constructor(props) {
    super(props);

    this.welcome = this.welcome.bind(this);
  }

  welcome() {
    const currentUser = this.props.session.currentUser;

    if (currentUser) {
      const firstName = currentUser.full_name.split(" ")[0];
      return <div className="index-page-nav-bar-greeting-and-logout">
        <h2>Hi, {firstName}!</h2>
        <button
          className="header-button"
          onClick={() => this.props.logout().then( () => {
            this.props.history.push('./login');
          })
        }
        >
        Log Out
      </button>
    </div>;
  } else {
    return <div className="index-page-nav-bar-greeting-and-logout">
      <Link to={`/login`}>
        <button
          className="header-button"
          >
          Login
        </button>
      </Link>
    </div>;
  }
}

render() {
  const treeHouses = this.props.treeHouses;

    if (treeHouses) {
    return (
      <div className="index-page-master">
        <div className="index-page-nav-bar">
          <h1 className="index-page-nav-bar-header">Tree Surfing</h1>

          <SearchBarContainer />
          <div>{this.welcome()}</div>

        </div>

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
            <TreeHouseMapContainer />
          </div>

          <div className="logout-button">
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div> Loading </div>
    );
  }
}
}

export default withRouter(TreeHouseIndex);
