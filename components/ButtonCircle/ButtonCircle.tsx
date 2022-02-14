import Button, { ButtonProps } from 'components/Button';

import {
  StyledButtonCircle,
  StyledButtonCircleProps,
} from './ButtonCircle.styles';

export type ButtonCircleProps = Omit<ButtonProps, 'iconRight' | 'genre'> &
  StyledButtonCircleProps;

export default function ButtonCircle(
  props: ButtonCircleProps
): React.ReactElement {
  const { children, ref, ...rest } = props;

  return (
    <StyledButtonCircle genre="plain" as={Button} {...rest}>
      {children}
    </StyledButtonCircle>
  );
}
