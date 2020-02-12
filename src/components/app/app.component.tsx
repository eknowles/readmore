import React from 'react';
import { Authenticator } from 'aws-amplify-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UsernameAttributes } from 'aws-amplify-react/lib-esm/Auth/common/types';

import { Layout } from 'antd';
import Books from '../books';
import Home from '../dashboard';

const { Content } = Layout;

const App = () => {
  return (
    <Authenticator usernameAttributes={UsernameAttributes.EMAIL}>
      <Router>
        <Layout>
          <Content>
            <Switch>
              <Route exact={true} path="/">
                <Home />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Authenticator>
  );
};

export default App;
