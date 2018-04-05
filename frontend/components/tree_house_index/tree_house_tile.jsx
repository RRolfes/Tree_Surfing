import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class TreeHouseTile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouse = this.props.treeHouse;
    return(
      <div className="tree-house-tile-container">
        <Link className="tree-house-img" to={`/treehouses/${treeHouse.id}`}>
          <img src={treeHouse.image_url}></img>
        </Link>
        <div className="tree-house-info">
          <ul >
            <li>{treeHouse.name}</li>
            <li>{treeHouse.city}</li>
            <li>{treeHouse.country}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TreeHouseTile;
