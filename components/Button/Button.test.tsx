import React from 'react';

import { render, screen, userEvent } from 'tests/test-utils';

import Button from './Button';

test('renders string children if set', () => {
  const text = 'hello';

  const { getByText } = render(<Button>{text}</Button>);

  expect(getByText(text)).toBeTruthy();
});

test('has set type="button" by default', () => {
  render(<Button>hello</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveAttribute('type', 'button');
});

test('emit onClick when clicked', () => {
  const handleOnClick = jest.fn();

  render(<Button onClick={handleOnClick}>hello</Button>);

  const buttonElement = screen.getByRole('button');

  if (buttonElement) {
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);

    expect(handleOnClick).toBeCalledTimes(2);
  }

  expect(buttonElement).toBeTruthy();
});

test('do not emit onClick when clicked and disabled', () => {
  const handleOnClick = jest.fn();

  render(
    <Button disabled onClick={handleOnClick}>
      hello
    </Button>
  );

  const buttonElement = screen.getByRole('button');

  if (buttonElement) {
    userEvent.click(buttonElement);

    expect(handleOnClick).toBeCalledTimes(0);
  }

  expect(buttonElement).toBeTruthy();
});
