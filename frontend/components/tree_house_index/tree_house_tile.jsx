import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class TreeHouseTile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouse = this.props.treeHouse;
    const treeHousePhoto = {
      backgroundImage: `url(${treeHouse.image_url})`
    };
    // debugger;

    return(
      <Link className="tree-house-link" to={`/treehouses/${treeHouse.id}`}>
        <div className="tree-house-tile-container">
          <div className="tree-house-img" style={treeHousePhoto}></div>
          <div className="tree-house-info">
            <ul >
              <li>{treeHouse.name}</li>
              <li>{treeHouse.city}</li>
              <li>{treeHouse.country}</li>
            </ul>
          </div>
        </div>
      </Link>
    );
  }
}

export default TreeHouseTile;
