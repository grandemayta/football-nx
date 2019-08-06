import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Teams from './teams';

describe(' Teams', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Teams />);
    expect(baseElement).toBeTruthy();
  });
});
