import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TreeHouseIndexContainer from './tree_house_index/tree_house_index_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpFormContainer from './sign_up/sign_up_form_container';
import TreeHouseShowContainer from './tree_house_show/tree_house_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container';


const App = () => (
  <div>
      <header className="nav-bar">
        <NavBar />
      </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/treehouses/:treeHouseId" component={TreeHouseShowContainer} />
      <Route exact path="/" component={TreeHouseIndexContainer} />
      <Route exact path="/treehouses" component={TreeHouseIndexContainer} />

  </div>
);

export default App;
