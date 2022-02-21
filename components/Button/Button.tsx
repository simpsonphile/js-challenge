import * as S from './Button.styles';
import type { StyledButtonProps } from './Button.styles';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  iconRight?: React.ReactElement;
} & StyledButtonProps;

const defaultProps: Partial<ButtonProps> = {
  variant: 'primary',
};

export default function Button(props: ButtonProps): React.ReactElement {
  const { iconRight, ref, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return (
    <S.Button {...rest}>
      {children && <S.ButtonLabel>{children}</S.ButtonLabel>}

      {iconRight && <S.ButtonIcon>{iconRight}</S.ButtonIcon>}
    </S.Button>
  );
}
