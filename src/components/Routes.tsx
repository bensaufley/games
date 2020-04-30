import React, { FunctionComponent, useContext } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import { FirebaseAuthContext } from './hocs/FirebaseAuth';
import EmailSignIn from './routes/EmailSignIn';
import FourOhFour from './routes/FourOhFour';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import Profile from './routes/Profile';

const Routes: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();
  const { loggedIn, user } = useContext(FirebaseAuthContext);

  if (loggedIn && !user?.displayName && pathname !== '/profile/') {
    return <Redirect to={{ pathname: '/profile/', state: { message: 'Please complete your user profile.' } }} />;
  }

  if (pathname && /[^/]$/.test(pathname)) return <Redirect to={`${pathname}/`} />;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={LogIn} />
      <Route exact path="/email-sign-in/" component={EmailSignIn} />
      <AuthenticatedRoute exact path="/profile/" component={Profile} />
      <Route path="*" component={FourOhFour} />
    </Switch>
  );
};

export default Routes;
