import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import TreeHouseShowContainer from './tree_house_show_container';

class TreeHouseShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const treeHouseId = parseInt(this.props.match.params.treeHouseId);
    this.props.fetchCurrentTreeHouse(treeHouseId);
  }

  render() {
    const currentTreeHouse = this.props.treeHouses.currentTreeHouse;
    debugger
    if (currentTreeHouse) {
      return (
        <div>{currentTreeHouse.name}</div>
      );
    } else {
      return(
        <div>Loading</div>
      );
    }
  }
}

export default withRouter(TreeHouseShow);
