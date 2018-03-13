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
              <img className="about-host-photo" src={'http://res.cloudinary.com/dreuhltzt/image/upload/v1520240540/John_uj22dz.webp'}></img>
              <div className="about-hosted-by">
                <div className="hosted-by">Hosted by</div>
              <div className="host-name">{host.first} + ' ' + {host.last}</div>
            </div>
            </div>
            <div className="description-and-amenities">
              <div className="about-description">
                {treeHouse.description}
              </div>
              <div className="about-icon bed-check">
                <div className="icon-and-text">
                  <i className="fa fa-bed"></i>
                  <div className="icon-text">Bed provided</div>
                </div>
                { treeHouse.bed ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
              </div>
              <div className="about-icon electricity-check">
                <div className="icon-and-text">
                  <i className="fa fa-plug"></i>
                  <div className="icon-text">Electricity</div>
                </div>
                { treeHouse.electricity ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
              </div>
              <div className="about-icon water-check">
                <div className="icon-and-text">
                  <i className="fa fa-tint"></i>
                  <div className="icon-text">Running water</div>
                </div>
                { treeHouse.water ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
