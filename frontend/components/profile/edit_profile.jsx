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
      <div className="edit-profile-container">
        <div className="click-options">
          <button onClick={this.handleClick()}>Edit Profile</button>
          <button onClick={console.log('Trips')}>Trips</button>
          <button >Photos</button>
          <button >Trust & Verification</button>
          <button >Reviews</button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
