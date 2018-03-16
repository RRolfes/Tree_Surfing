import React from 'react';

class Activites extends React.Component {
  render() {
    const treeHouse = this.props.treeHouse;
    return(
      <div className="features-container">
        <div className="features-text">
          Activites
        </div>
        <div className="features-left-right">
          <div className="features-left">
            {treeHouse.biking ? <div className="feature-true"><i className="fa fa-bicycle"></i> Biking</div> : <div className="feature-false"><i className="fa fa-bicycle"></i> Biking</div> }
            {treeHouse.fishing ? <div className="feature-true"><i className="fa far fa-sun"></i> Fishing</div> : <div className="feature-false"><i className="fa far fa-sun"></i> Picnic Table</div> }
            {treeHouse.horseback ? <div className="feature-true"><i className="fab fa-sticker-mule"></i> Horseback riding</div> : <div className="feature-false"><i className="fab fa-sticker-mule"></i> Horseback riding</div> }
            {treeHouse.swimming ? <div className="feature-true"><i className="fa fa-life-ring"></i> Swimming</div> : <div className="feature-false"><i className="fa fa-life-ring"></i> Swimming</div> }
            {treeHouse.climbing ? <div className="feature-true"><i className="fa fa-hand-paper"></i> Climbing</div> : <div className="feature-false"><i className="fa fa-hand-paper"></i> Climbing</div> }

          </div>
          <div className="features-right">
            {treeHouse.boating ? <div className="feature-true"><i className="fa fa-ship"></i> Boating</div> : <div className="feature-false" color="red"><i className="fa fa-ship"></i> Boating</div> }
            {treeHouse.hiking ? <div className="feature-true"><i className="fa fas fa-blind"></i> Hiking</div> : <div className="feature-false"><i className="fa fas fa-blind"></i> Hiking</div> }
            {treeHouse.paddling ? <div className="feature-true"><i className="fa fa-hand-rock"></i> Paddling</div> : <div className="feature-false"><i className="fa fa-hand-rock"></i> Paddling</div> }
            {treeHouse.wildlife_watching ? <div className="feature-true"><i className="fab fa-earlybirds"></i> Wildlife watching</div> : <div className="feature-false"><i className="fab fa-earlybirds"></i> Wildlife watching</div> }
          </div>
        </div>
      </div>
    );
  }
}

export default Activites;
