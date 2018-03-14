import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { Link, withRouter } from 'react-router-dom';
import SignUpModal from '../modals/sign_up_modal';
import LogInModal from '../modals/log_in_modal';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.welcome = this.welcome.bind(this);
  }

  welcome() {
    const currentUser = this.props.session.currentUser;

    if (currentUser) {
      const first = currentUser.first;
      return <div className="nav-bar-greeting-and-logout">
        <h2>Hi, {first}!</h2>
        <button
          className="header-button"
          onClick={() => this.props.logout().then( () => {
            this.props.history.push('./login');
          })
        }
        >
        Log Out
      </button>
    </div>;
    } else {
      return <div className="nav-bar-greeting-and-logout">
        <LogInModal />
        <SignUpModal />
      </div>;
    }
  }

  render(){

    return(
      <div className="nav-bar">
        <div className='left-nav'>
          <a className="logo" href="#/">
            <img src='http://res.cloudinary.com/dreuhltzt/image/upload/v1518133771/Logo_foyk7n.png' ></img>
          </a>
        <SearchBarContainer />

        </div>
        <div className="right-nav">
          <div>{this.welcome()}</div>
        </div>
      </div>
    );
  }

}

export default NavBar;
