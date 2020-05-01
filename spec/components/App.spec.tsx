import React from 'react';
import { create } from 'react-test-renderer';

import App from '../../src/components/App';

describe('components/App', () => {
  it('renders', () => {
    expect.assertions(1);

    const component = create(<App />);

    expect(component.toJSON()).toMatchInlineSnapshot(`
      Array [
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
        </nav>,
        <h1>
          Home Page
        </h1>,
        <p>
          Logged in: 
          false
        </p>,
      ]
    `);
  });
});
