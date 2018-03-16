import React from 'react';

class Details extends React.Component {
  render() {
    const treeHouse = this.props.treeHouse;
    return(
      <div className="details-container">
        <div className="details-text">
          Details
        </div>
        <div className="details-left-right">
          <div className="details-left">
            Check in after: <b>{treeHouse.check_in}</b> <br/>
            Check out before: <b>{treeHouse.check_out}</b> <br/>
            Cancellation policy: <b>{treeHouse.cancellation_policy}</b>
          </div>
          <div className="details-right">
            On arrival: <b>{treeHouse.on_arrival}</b> <br/>
            Minimum nights: <b>{treeHouse.minimum_nights}</b> <br/>
            Accepts bookings: <b>{treeHouse.accepts_bookings}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
