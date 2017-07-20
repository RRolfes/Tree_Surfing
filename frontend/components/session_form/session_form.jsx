import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if logged in, go to route index
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
    let user;
    if (e.currentTarget.innerHTML === "Guest Login") {
      user = {
        email: "Guest@TreeSurfing.com",
        password: "password"
      };
    } else {
      user = this.state;
    }
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
      } else {
        return <Link to="/login">log in instead</Link>;
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
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to Tree Surfing!
              <br/>
              Please {this.props.formType} or {this.navLink()}
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <label>Email:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </div>
              <button
                className="login_items"
                onClick={this.handleSubmit}>
                Guest Login
              </button>
            </form>
          </div>
        );
      }
    }

    export default withRouter(SessionForm);
