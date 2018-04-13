import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        currentComponent: 'edit'
      };
  }

  render() {
    return(
      <div className="edit-profile-container">
        <div className="click-options">
          <button>Edit Profile</button>
          <button>Trips</button>
          <button>Photos</button>
          <button>Trust & Verification</button>
          <button>Reviews</button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
