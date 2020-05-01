import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import { FirebaseAuthContext } from '../../src/components/hocs/FirebaseAuth';
import NavBar from '../../src/components/NavBar';

describe('components/NavBar', () => {
  it('renders', () => {
    expect.assertions(1);

    const component = create(
      <FirebaseAuthContext.Provider value={{ loggedIn: false, user: null }}>
        <StaticRouter location="/">
          <NavBar />
        </StaticRouter>
      </FirebaseAuthContext.Provider>,
    );

    expect(component.toJSON()).toMatchInlineSnapshot(`
      <nav>
        <h2>
          <a
            href="/"
            onClick={[Function]}
          >
            Games
          </a>
        </h2>
        <a
          href="/login/"
          onClick={[Function]}
        >
          Log In
        </a>
      </nav>
    `);
  });
});
