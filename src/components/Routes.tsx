import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import EmailSignIn from './routes/EmailSignIn';
import FourOhFour from './routes/FourOhFour';
import Home from './routes/Home';
import LogIn from './routes/LogIn';

const Routes: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();

  if (pathname && /[^/]$/.test(pathname)) return <Redirect to={`${pathname}/`} />;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={LogIn} />
      <Route exact path="/email-sign-in/" component={EmailSignIn} />
      <Route path="*" component={FourOhFour} />
    </Switch>
  );
};

export default Routes;
