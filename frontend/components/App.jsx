import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpContainer from './sign_up/sign_up_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
