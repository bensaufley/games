import React, { FunctionComponent, useContext } from 'react';

import { FirebaseAuthContext } from '../hocs/FirebaseAuth';

const Home: FunctionComponent<{}> = () => {
  const { loggedIn } = useContext(FirebaseAuthContext);

  return (
    <>
      <h1>Home Page</h1>
      <p>Logged in: {loggedIn.toString()}</p>
    </>
  );
};

export default Home;
