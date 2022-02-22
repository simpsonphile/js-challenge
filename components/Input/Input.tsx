import { forwardRef } from 'react';

import {
  StyledInput,
  StyledInputIconWrap,
  StyledInputWrap,
} from './Input.styles';

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'ref'
> & {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconRight, iconLeft, ...rest } = props;

  const hasIconRight = !!iconRight;
  const hasIconLeft = !!iconLeft;

  return (
    <StyledInputWrap>
      {hasIconLeft && (
        <StyledInputIconWrap $position="left">{iconLeft}</StyledInputIconWrap>
      )}

      <StyledInput
        ref={ref}
        hasIconLeft={hasIconLeft}
        hasIconRight={hasIconRight}
        {...rest}
      />

      {hasIconRight && (
        <StyledInputIconWrap $position="right">{iconRight}</StyledInputIconWrap>
      )}
    </StyledInputWrap>
  );
});

Input.displayName = 'input';

export default Input;
