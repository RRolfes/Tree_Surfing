import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TreeHouseContainer from './tree_house/tree_house_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpContainer from './sign_up/sign_up_container';
import TreeHouseShowContainer from './tree_house_show/tree_house_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/treehouses/:treeHouseId" component={TreeHouseShowContainer} />
      <Route exact path="/" component={TreeHouseContainer} />
      <Route exact path="/treehouses" component={TreeHouseContainer} />

  </div>
);

export default App;
