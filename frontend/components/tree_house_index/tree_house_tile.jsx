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
        <li key={treeHouse.id} className="tree-house-index-item" >
          <Link to={`/treehouses/${treeHouse.id}`}>
            <img className=".map-img" src={treeHouse.image_url}></img>
          </Link>
          <ul className="tree-house-info">
            <li>{treeHouse.name}</li>
            <li>{treeHouse.city}</li>
            <li>{treeHouse.country}</li>
          </ul>
        </li>
      </div>
    );
  }
}

export default TreeHouseTile;
