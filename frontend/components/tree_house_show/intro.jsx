import React from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouse = this.props.treeHouse;
    return(
      <div className="intro-contianer">
        <div className="location">
          {treeHouse.state ? treeHouse.state : treeHouse.country} > {treeHouse.city}
        </div>
        <div className="name">
          {treeHouse.name}
        </div>
        <div className="rating-container">
          <div className="heart">
            <i className="far fa-heart"></i>
          </div>
          <div className="rating">
            98%
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
