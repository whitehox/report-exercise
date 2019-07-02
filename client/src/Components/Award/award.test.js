import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Award from './index';

afterEach(cleanup);

describe('Award Component', () => {
  test('Mounts', () => {
    const { getByText } = render(<Award />);

    expect(getByText(/Driver of the Year/)).not.toBeNull();
    expect(getByText(/Driver Details/)).not.toBeNull();
  });
  test('If correct data renders', () => {
    const { getByText } = render(<Award />);

    expect(getByText(/Drivers Name/)).not.toBeNull();
    expect(getByText(/0 Cash trips/)).not.toBeNull();
  });
});
