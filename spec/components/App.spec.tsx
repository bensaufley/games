import React from 'react';
import { create } from 'react-test-renderer';

import App from '../../src/components/App';

describe('app', () => {
  it('renders', () => {
    expect.assertions(1);

    const component = create(<App />);

    expect(component.toJSON()).toMatchInlineSnapshot(`
      <h1>
        Hello world!
      </h1>
    `);
  });
});
