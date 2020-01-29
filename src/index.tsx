import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import App from './components/app';
import awsConfig from './aws-exports';
import './index.css';

Amplify.configure(awsConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
