import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: 'edit'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({currentComponent: 'edit'});
    // console.log(this.state.currentComponent);
  }


  render() {
    return(
      <div className="profile-container">
        <div className="test">
          Hello
        </div>
        <div className="name-contact-rating-container">
          <div className="image-container">

          </div>
        </div>
        <div className="services-reviews-container">

        </div>
      </div>
    );
  }
}

export default EditProfile;
