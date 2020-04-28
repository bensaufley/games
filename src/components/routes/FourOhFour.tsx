import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FourOhFour: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();

  return (
    <>
      <h1>404</h1>
      <p>No such route: {pathname}</p>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default FourOhFour;
