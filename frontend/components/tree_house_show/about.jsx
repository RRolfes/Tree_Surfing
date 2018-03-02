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
            <div className="about-description">
              This is where the descrition will go. This is where the descrition will go. This is where the descrition will go. This is where the descrition will go. This is where the descrition will go. This is where the descrition will go. This is where the descrition will go. This is where the descrition will go.
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
