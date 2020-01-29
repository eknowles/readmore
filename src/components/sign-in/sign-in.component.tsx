import { Auth } from 'aws-amplify';
import React from 'react';
import { Result, Icon, Button } from 'antd';

const SignIn = () => {
  return (
    <Result
      icon={<Icon type="book" />}
      title="Welcome to Readmore"
      extra={<Button type="primary" onClick={() => (Auth as any).federatedSignIn({ provider: 'Google' })}>Sign in with Google</Button>}
    />
  );
};

export default SignIn;
