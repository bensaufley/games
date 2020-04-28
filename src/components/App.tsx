import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppErrorBoundary from './AppErrorBoundary';
import { FirebaseAuthProvider } from './hocs/FirebaseAuth';
import NavBar from './NavBar';
import Routes from './Routes';
import LoadingProvider from './hocs/Loading';

const App: FunctionComponent<{}> = () => (
  <AppErrorBoundary>
    <FirebaseAuthProvider>
      <LoadingProvider>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </LoadingProvider>
    </FirebaseAuthProvider>
  </AppErrorBoundary>
);

export default App;
