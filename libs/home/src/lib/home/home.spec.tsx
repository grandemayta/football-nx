import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from './home';

describe(' Home', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
