import React, { FunctionComponent, useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { FirebaseAuthContext } from './hocs/FirebaseAuth';

/* eslint-disable react/jsx-props-no-spreading */
const AuthenticatedRoute: FunctionComponent<RouteProps> = ({ children, render, component: Component, ...rest }) => {
  const { loggedIn } = useContext(FirebaseAuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          render?.(props) || (Component && <Component {...props} />) || children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location.pathname } }} />
        )
      }
    />
  );
};

AuthenticatedRoute.displayName = 'AuthenticatedRoute';

export default AuthenticatedRoute;
