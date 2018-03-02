import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouse = this.props.treeHouse;
    return(
      <div className="features-container">
        <div className="features-text">
          More features
        </div>
        <div className="features-left-right">
          <div className="features-left">
            {treeHouse.toilets ? <div className="feature-true"><i className="fa fa-transgender-alt"></i> Toilets</div> : <div className="feature-false"><i className="fa fa-transgender-alt"></i> Toilets</div> }
            {treeHouse.picnic_table ? <div className="feature-true"><i className="fa fa-utensils"></i> Picnic table</div> : <div className="feature-false"><i className="fa fa-utensils"></i> Picnic Table</div> }
            {treeHouse.wifi ? <div className="feature-true"><i className="fa fa-wifi"></i> Wifi</div> : <div className="feature-false"><i className="fa fa-wifi"></i> Wifi</div> }

          </div>
          <div className="features-right">
            {treeHouse.showers ? <div className="feature-true"><i className="fa fa-shower"></i> Showers</div> : <div className="feature-false" color="red"><i className="fa fa-shower"></i> Showers</div> }
            {treeHouse.trash ? <div className="feature-true"><i className="fa fa-trash-alt"></i> Trash</div> : <div className="feature-false"><i className="fa fa-trash-alt"></i> Trash</div> }
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
