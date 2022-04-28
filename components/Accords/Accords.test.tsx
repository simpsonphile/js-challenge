import React from 'react';

import { render, screen } from 'tests/test-utils';

import Accords, { Items } from './index';

test('renders accords component where only active accords are visible', () => {
  const items: Items = {
    1: {
      title: 'title 1',
      content: 'content 1',
    },
    2: {
      title: 'title 2',
      content: 'content 2',
    },
    3: {
      title: 'title 3',
      content: 'content 3',
    },
  };

  render(<Accords items={items} defaultActive={['1']} />);

  const accordsElement = screen.getByTestId('accords');

  expect(accordsElement).toBeInTheDocument();

  const accord1 = screen.getByText(/content 1/i);
  const accord2 = screen.getByText(/content 2/i);
  const accord3 = screen.getByText(/content 3/i);

  expect(accord1).toBeInTheDocument();
  expect(accord1).toBeVisible();

  expect(accord2).not.toBeVisible();
  expect(accord3).not.toBeVisible();
});
