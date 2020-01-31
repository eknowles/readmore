import React from 'react';
import { Authenticator } from 'aws-amplify-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Books from '../books';
import Home from '../dashboard';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Authenticator>
      <Router>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['dashboard']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="dashboard">
                Dashboard
                <Link to={'/'} />
              </Menu.Item>
              <Menu.Item key="books">
                Books
                <Link to={'/books'} />
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Switch>
              <Route exact={true} path="/">
                <Home />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Readmore by Somo</Footer>
        </Layout>
      </Router>
    </Authenticator>
  );
};

export default App;
