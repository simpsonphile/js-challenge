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
  iconRight?: React.ReactElement;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconRight, ...rest } = props;

  const hasIcon = !!iconRight;

  return (
    <StyledInputWrap {...rest}>
      <StyledInput ref={ref} hasIcon={hasIcon} {...rest} />

      {hasIcon && <StyledInputIconWrap>{iconRight}</StyledInputIconWrap>}
    </StyledInputWrap>
  );
});

Input.displayName = 'input';

export default Input;
