import React from 'react';

import { render, screen } from 'tests/test-utils';

import Accord from './Accord';

test('by default renders with content hidden and aria-hidden true', () => {
  render(<Accord title="accord" content="hello" />);

  const accordElement = screen.getByTestId('accord');
  const accordContent = screen.getByTestId('accord-content');

  expect(accordElement).toBeInTheDocument();

  expect(accordContent).toHaveAttribute('aria-hidden', 'true');
  expect(accordContent).not.toBeVisible();
});

test('when isActive set to true content is visible and aria-hidden set to false', () => {
  render(<Accord title="accord" content="hello" isActive />);

  const accordElement = screen.getByTestId('accord');
  const accordContent = screen.getByTestId('accord-content');

  expect(accordElement).toBeInTheDocument();

  expect(accordContent).toHaveAttribute('aria-hidden', 'false');
  expect(accordContent).toBeVisible();
});
