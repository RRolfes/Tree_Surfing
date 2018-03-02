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
          Features
        </div>
        <div className="features-left-right">
          <div className="features-left">
            {treeHouse.toilets ? <div className="feature-true">Toilets</div> : <div className="feature-ture">Toilets</div> }
            Check in after: <b>{treeHouse.check_in}</b> <br/>
            Check out before: <b>{treeHouse.check_out}</b> <br/>
            Cancellation policy: <b>{treeHouse.cancellation_policy}</b>
          </div>
          <div className="features-right">
            On arrival: <b>{treeHouse.on_arrival}</b> <br/>
            Minimum nights: <b>{treeHouse.minimum_nights}</b> <br/>
            Accepts bookings: <b>{treeHouse.accepts_bookings}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
