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
    console.log(this.props);
    debugger;
    return(
      <div class="profile-container">
        <div class="test">
          Hello
        </div>
        <div class="name-contact-rating-container">
          <div class="image-container">

          </div>
        </div>
        <div class="services-reviews-container">

        </div>
      </div>
    );
  }
}

export default EditProfile;
