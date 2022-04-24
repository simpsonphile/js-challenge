import React from 'react';

import { fireEvent } from '@testing-library/react';

import { render } from 'tests/test-utils';

import Button from './Button';

test('renders string children if set', () => {
  const text = 'hello';
  const component = <Button>{text}</Button>;

  const { getByText } = render(component);

  expect(getByText(text)).toBeTruthy();
});

test('has set type="button" by default', () => {
  const component = <Button>hello</Button>;

  render(component);

  const buttonElement = document.querySelector('button');

  expect(buttonElement).toHaveAttribute('type', 'button');
});

test('emit onClick when clicked', () => {
  const handleOnClick = jest.fn();
  const component = <Button onClick={handleOnClick}>hello</Button>;

  render(component);

  const buttonElement = document.querySelector('button');

  if (buttonElement) {
    fireEvent.click(buttonElement);

    expect(handleOnClick).toBeCalledTimes(1);
  }

  expect(buttonElement).toBeTruthy();
});
