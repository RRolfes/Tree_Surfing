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
        <div className="tree-house-tile-container">
          <Link to={`/treehouses/${treeHouse.id}`}>
            <div className="tree-house-img-container">
              <div className="tree-house-img" style={treeHousePhoto}></div>
            </div>
          </Link>
          <Link to={`/treehouses/${treeHouse.id}`}>
            <div className="tree-house-info">
              <ul>
                <li className="tree-house-name">{treeHouse.name}</li>
                <li>{treeHouse.city}, {treeHouse.state ? treeHouse.state : treeHouse.country}</li>
              </ul>
            </div>
          </Link>
        </div>
    );
  }
}

export default TreeHouseTile;
