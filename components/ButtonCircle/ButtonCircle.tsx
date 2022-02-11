import Button, { ButtonProps } from 'components/Button';
import { StyledButtonCircle } from './ButtonCircle.style';

type ButtonCircleProps = Omit<ButtonProps, 'iconRight' | 'genre'>;

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
