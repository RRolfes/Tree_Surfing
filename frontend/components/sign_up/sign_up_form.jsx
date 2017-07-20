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
      hosting: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <label>Hosting?:
              <input
                type="text"
                value={this.props.city}
                onChange={this.update("hosting")}
                className="signup-form"
                />
            </label>
            <br/>
            <label>Gender:
              <input
                type="text"
                value={this.props.city}
                onChange={this.update("gender")}
                className="signup-form"
                />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
