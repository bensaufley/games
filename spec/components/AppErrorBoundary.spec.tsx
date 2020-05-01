import React from 'react';
import { create } from 'react-test-renderer';

import AppErrorBoundary from '../../src/components/AppErrorBoundary';

describe('components/AppErrorBoundary', () => {
  it('renders', () => {
    expect.assertions(1);

    const component = create(
      <AppErrorBoundary>
        <h1>Test</h1>
      </AppErrorBoundary>,
    );

    expect(component.toJSON()).toMatchInlineSnapshot(`
      <h1>
        Test
      </h1>
    `);
  });

  it('renders with error', () => {
    expect.assertions(1);

    const ComponentThatThrows = () => {
      throw new Error('it broke!');
    };

    const component = create(
      <AppErrorBoundary>
        <ComponentThatThrows />
      </AppErrorBoundary>,
    );

    expect(component.toJSON()).toMatchInlineSnapshot(`
      Array [
        <h2>
          Error
        </h2>,
        <pre>
          Error: it broke!
        </pre>,
      ]
    `);
  });
});
