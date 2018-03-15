
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      city: '',
      country: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHost = this.handleHost.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.host = '-';
    this.gender = '-';

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(this.props);
    this.props.signup(user);
  }

  handleHost(e) {
    e.preventDefault();
    if (this.state.host === false) {
      this.host = "Yes";
      this.setState({host: true});
    } else {
      this.host = "No";
      this.setState({host: false});
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
      <ul className="errors">
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
        <form onSubmit={this.handleSubmit} >
          <h1 className="login-header">Sign Up</h1>
          {this.renderErrors()}
          <div className="signup-form">
            <div className="input-icon-container">
              <input
                type="text"
                placeholder="First Name"
                value={this.state.first}
                onChange={this.update("first")}
                className="signup-input"
                />
              <i className="fas fa-user"></i>
            </div>

            <div className="input-icon-container">
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.last}
                onChange={this.update("last")}
                className="signup-input"
                />
              <i className="fas fa-user"></i>
            </div>

            <div className="input-icon-container">
              <input
                type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
                />
              <i className="fas fa-envelope"></i>

            </div>

            <div className="input-icon-container">
              <input
                type="password"
                placeholder="Create a Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
                />
              <i className="fas fa-key"></i>
            </div>

            <div className="input-icon-container">
              <input
                type="text"
                placeholder="Home City"
                value={this.props.city}
                onChange={this.update("city")}
                className="signup-input"
                />
              <i className="far fa-building"></i>
            </div>

            <div className="input-icon-container">
              <input
                type="text"
                placeholder="Home Country"
                value={this.props.city}
                onChange={this.update("country")}
                className="signup-input"
                />
              <i className="fas fa-globe"></i>
            </div>
            <input type="submit" value="Submit" className="submit-button" />
            Already a member?
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
