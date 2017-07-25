import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseContainer from './tree_house_container';
import Map from './tree_house_map';

class TreeHouseIndex extends React.Component {

  componentWillMount() {
    this.props.fetchTreeHouses();
  }

  render() {
    const treeHouses = this.props.treeHouses;
    if (Object.keys(treeHouses).length !== 0) {
      return (
        <div className="tree-house-index">
          <ul>
            {Object.keys(treeHouses).map((key, idx) =>
              <li key={idx} >
                <div className="tree-house-info">
                  {treeHouses[key].name}
                  <br/>
                  {treeHouses[key].city}
                  <br/>
                  {treeHouses[key].country}
                  <br/>
                </div>
              </li>
              )}
          </ul>
          <Map treeHouses={treeHouses} />
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
