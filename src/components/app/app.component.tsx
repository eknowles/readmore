import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import awsconfig from '../../aws-exports';
import Home from '../home';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const SignIn = () => {
  return <button onClick={() => (Auth as any).federatedSignIn({ provider: 'Google' })}>Open Google</button>;
};

export default withAuthenticator(App, true, [
  <SignIn />
]);
