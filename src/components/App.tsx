import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppErrorBoundary from './AppErrorBoundary';
import { FirebaseAuthProvider } from './FirebaseAuth';
import Home from './routes/Home';

const App: FunctionComponent<{}> = () => (
  <AppErrorBoundary>
    <FirebaseAuthProvider>
      <h1>Hello world!</h1>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </FirebaseAuthProvider>
  </AppErrorBoundary>
);

export default App;
