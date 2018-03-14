import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignUpModal from '../modals/sign_up_modal';


class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let user;
    if (e.currentTarget.innerHTML === "Guest Login") {
      user = { email: "Guest@TreeSurfing.com", password: "password" };
    } else {
      user = this.state;
    }
    this.props.login(user).then( () => {
      this.props.history.push('/login');
    });
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="login-header">Please Login</h2>
          {this.renderErrors()}
          <div className="login-form">
            <div className="input-icon-container">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email address"
                />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="input-icon-container">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                />
              <i className="fas fa-key"></i>
            </div>
            <input type="submit" value="Log In" className="submit-button" />

            <button
              className="submit-button guest-login"
              onClick={this.handleSubmit}>
              Guest Login
            </button>
            Not a member yet?

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInForm);
