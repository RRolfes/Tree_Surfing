import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
      password: '',
      city: '',
      country: '',
      gender: '',
      host: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHost = this.handleHost.bind(this);
    this.host = '?';
    this.gender = '?';

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  handleHost(e) {
     e.preventDefault();
     if (this.state.host === true) {
       this.host = "Yes";
       this.setState({host: false});
     } else {
       this.host = "No";
       this.setState({host: true});
     }
   }

   handleGender(e) {
      e.preventDefault();
      if (this.state.gender !== "Male") {
        this.gender = "Male";
        this.setState({gender: "Male"});
      } else {
        this.gender = "Female";
        this.setState({gender: "Female"});
      }
    }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Please enter the info below!
          {this.renderErrors()}
          <div className="signup-form">
            <label>Full Name:
              <input
                type="text"
                value={this.state.full_name}
                onChange={this.update("full_name")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Password:
              <input
                type="text"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-form"
                />
            </label>
            <br/>
            <label>City:
              <input
                type="text"
                value={this.props.city}
                onChange={this.update("city")}
                className="signup-form"
                />
            </label>
            <br/>
            <label>Country:
              <input
                type="text"
                value={this.props.city}
                onChange={this.update("country")}
                className="signup-form"
                />
            </label>
            <br/>
            <div className="gender">
              Gender?
              <button onClick={this.handleGender}>
                {this.gender}
              </button>
            </div>
            <div className="host">
              Host?
              <button onClick={this.handleHost}>
                {this.host}
              </button>
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
