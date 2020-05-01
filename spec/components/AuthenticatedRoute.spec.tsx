import React from 'react';
import { Route, StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import AuthenticatedRoute from '../../src/components/AuthenticatedRoute';
import { FirebaseAuthContext } from '../../src/components/hocs/FirebaseAuth';

describe('components/AuthenticatedRoute', () => {
  const TestRootComponent = () => <h1>Test Root Component</h1>;
  const TestAuthenticatedComponent = () => <h1>Test Authenticated Component</h1>;

  it('renders when logged in', () => {
    expect.assertions(1);

    const component = create(
      <FirebaseAuthContext.Provider value={{ loggedIn: true, user: {} as any }}>
        <StaticRouter location="/path/">
          <Route path="/" component={TestRootComponent} />
          <AuthenticatedRoute path="/path/" component={TestAuthenticatedComponent} />
        </StaticRouter>
      </FirebaseAuthContext.Provider>,
    );

    expect(component.toJSON()).toMatchInlineSnapshot(`
      Array [
        <h1>
          Test Root Component
        </h1>,
        <h1>
          Test Authenticated Component
        </h1>,
      ]
    `);
  });

  it('redirects when logged out', () => {
    expect.assertions(1);

    const component = create(
      <FirebaseAuthContext.Provider value={{ loggedIn: false, user: null }}>
        <StaticRouter location="/path/">
          <Route path="/" component={TestRootComponent} />
          <AuthenticatedRoute path="/path/" component={TestAuthenticatedComponent} />
        </StaticRouter>
      </FirebaseAuthContext.Provider>,
    );

    expect(component.toJSON()).toMatchInlineSnapshot(`
      <h1>
        Test Root Component
      </h1>
    `);
  });
});
