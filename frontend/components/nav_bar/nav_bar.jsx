import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { Link, withRouter } from 'react-router-dom';
import SignUpModal from '../sign_up/sign_up_modal';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.welcome = this.welcome.bind(this);
  }

  welcome() {
    const currentUser = this.props.session.currentUser;

    if (currentUser) {
      const firstName = currentUser.full_name.split(" ")[0];
      return <div className="nav-bar-greeting-and-logout">
        <h2>Hi, {firstName}!</h2>
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
        <Link to={`/login`}>
          <button className="header-button"> Login </button>
        </Link>
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
          <SignUpModal />
        </div>
      </div>
    );
  }

}

export default SearchBar;


// <div>{this.welcome()}</div>
