import React from 'react';

import { render } from 'tests/test-utils';

import Button from './Button';

test('Button renders string children if set', () => {
  const component = <Button>hello</Button>;

  const { getByText } = render(component);

  expect(getByText('hello')).toBeTruthy();
});

test('Button has set type="button" by default', () => {
  const component = <Button>hello</Button>;

  render(component);

  const buttonElement = document.querySelector('button');

  expect(buttonElement).toHaveAttribute('type', 'button');
});
