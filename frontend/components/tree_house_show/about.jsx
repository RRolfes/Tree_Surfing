import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const treeHouse = this.props.treeHouse;
    const host = this.props.host;

    return(
      <div className="about-container">
        <div className="about-name">
          About {treeHouse.name}
        </div>
        <div className="host-and-description-container">
          <div className="about-host-container">
            <div className="host-photo-and-name">
              <img className="about-host-photo" src={host.image_url}></img>
              <div className="about-hosted-by">
                <div className="hosted-by">Hosted by</div>
              <div className="host-name">{host.full_name}</div>
            </div>
            </div>
            <div className="description-and-amenities">
              <div className="about-description">
                The Eagle's Nest Treehouse Farm Stay combines a wilderness experience, sumptuous old growth redwoods, but the comforts of a guest house, with complete privacy and tranquility, yet is within easy driving distance of some of the best that California has to offer. This farm stay and wilderness experience is located on a working ranch on the Sonoma coast. We are less than 90 minutes north of San Francisco and half that from California's premier wine-growing regions of the Napa-Sonoma Valleys. We are also smack dab in the middle of some of California's most breathtaking coast. You are near enough to civilization, but it feels like you are in the most remote and peaceful spot on earth.
              </div>
              { false ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

// <div className="host-profile">
//   <div className="host-name">Host: {host.full_name}</div>
//   <div className="host-photo-container">
//     <img className='host-photo' src={host.image_url}></img>
//   </div>
//   <ul className="host-info">
//     <li><b>Hometown</b>: {host.city}</li>
//     <li><b>Age</b>: {host.age}</li>
//     <li><b>Occupation</b>: {host.occupation}</li>
//     <li><b>About</b>: {host.about}</li>
//   </ul>
// </div>
