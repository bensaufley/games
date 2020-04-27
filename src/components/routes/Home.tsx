import React, { FunctionComponent, useContext } from 'react';

import { FirebaseAuthContext } from '../FirebaseAuth';

const Home: FunctionComponent<{}> = () => {
  const { loggedIn } = useContext(FirebaseAuthContext);

  return <p>Logged in: {loggedIn.toString()}</p>;
};

export default Home;
