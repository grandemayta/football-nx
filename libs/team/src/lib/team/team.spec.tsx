import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Team from './team';

describe(' Team', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Team />);
    expect(baseElement).toBeTruthy();
  });
});
