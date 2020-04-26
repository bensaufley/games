import React from 'react';
import { create } from 'react-test-renderer';

import App from '../../src/components/App';

describe('App', () => {
  it('renders', () => {
    const component = create(<App />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
