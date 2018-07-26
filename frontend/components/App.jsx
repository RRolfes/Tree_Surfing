import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TreeHouseIndexContainer from './tree_house_index/tree_house_index_container';
import LogInFormContainer from './log_in/log_in_form_container';
import SignUpFormContainer from './sign_up/sign_up_form_container';
import TreeHouseShowContainer from './tree_house_show/tree_house_show_container';
import NavBar from './nav_bar/nav_bar_container';
import EditProfileContainer from './profile/edit_profile_container';

const App = () => (
  <div>
      <header>
        <NavBar/>
      </header>
      <div className="main-content">
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route exact path="/edit-profile" component={EditProfileContainer} />
        <Route path="/treehouses/:treeHouseId" component={TreeHouseShowContainer} />
        <Route exact path="/" component={TreeHouseIndexContainer} />
        <Route exact path="/treehouses" component={TreeHouseIndexContainer} />
      </div>
  </div>
);

export default App;
