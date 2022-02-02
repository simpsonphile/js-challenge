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
  iconRight?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconRight, ...rest } = props;

  return (
    <StyledInputWrap {...rest}>
      <StyledInput ref={ref} {...rest} />

      <StyledInputIconWrap>{iconRight}</StyledInputIconWrap>
    </StyledInputWrap>
  );
});

Input.displayName = 'input';

export default Input;
