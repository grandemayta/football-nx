import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Standings from './standings';

describe(' Standings', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Standings />);
    expect(baseElement).toBeTruthy();
  });
});
