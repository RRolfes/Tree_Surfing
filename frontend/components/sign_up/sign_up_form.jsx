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
      host: false
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
    user["location"] = [user["location"]];
    this.props.signup(user).then(
      () => this.props.history.push({
        pathname: `/`
      })
    );
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
          <h2 className="login-header">Sign Up</h2>
          {this.renderErrors()}
          <div className="signup-form">
            <input
              type="text"
              placeholder="First Last"
              value={this.state.full_name}
              onChange={this.update("full_name")}
              className="signup-input"
              />
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              className="signup-input"
              />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input"
              />
            <input
              type="text"
              placeholder="City"
              value={this.props.city}
              onChange={this.update("city")}
              className="signup-input"
              />
            <input
              type="text"
              placeholder="Country"
              value={this.props.city}
              onChange={this.update("country")}
              className="signup-input"
              />

            <div className="signup-button">
              <div>Gender</div>
              <button onClick={this.handleGender}>
                {this.gender}
              </button>
            </div>

            <div className="signup-button">
              Host
              <button onClick={this.handleHost}>
                {this.host}
              </button>
            </div>

            <input type="submit" value="Submit" className="submit-button" />

            <br/>
            Already a member?
            <br/>
            <Link to="/login" className="login_input" className="Link">
              Sign In
            </Link>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
