import {
  StyledButton,
  StyledButtonIcon,
  StyledButtonProps,
} from './Button.styles';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  iconRight?: React.ReactElement;
} & StyledButtonProps;

const defaultProps: Partial<ButtonProps> = {
  genre: 'primary',
};

export default function Button(props: ButtonProps): React.ReactElement {
  const { genre, iconRight, ref, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return (
    <StyledButton genre={genre} {...rest}>
      {children && <span>{children}</span>}

      {iconRight && <StyledButtonIcon>{iconRight}</StyledButtonIcon>}
    </StyledButton>
  );
}
