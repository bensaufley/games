import React from 'react';
import { create } from 'react-test-renderer';

import Routes from '../../src/components/Routes';

describe('components/Routes', () => {
  it.skip('renders', () => {
    expect.assertions(1);

    const component = create(<Routes />);

    expect(component.toJSON()).toMatchInlineSnapshot();
  });
});
