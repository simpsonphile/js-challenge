import {
  StyledButton,
  StyledButtonLabel,
  StyledButtonIcon,
  StyledButtonProps,
} from './Button.styles';

export type ButtonProps = React.DetailedHTMLProps<
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
      {children && <StyledButtonLabel>{children}</StyledButtonLabel>}

      {iconRight && <StyledButtonIcon>{iconRight}</StyledButtonIcon>}
    </StyledButton>
  );
}
