import { StyledHeadline, StyledHeadlineProps } from './Headline.styles';

type HeadlineProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  StyledHeadlineProps;

const defaultProps: Partial<HeadlineProps> = {
  tag: 'p',
  size: 'xl',
};

export default function Headline(props: HeadlineProps): React.ReactElement {
  const { tag, size, ref, ...rest } = { ...defaultProps, ...props };

  return <StyledHeadline size={size} {...rest} />;
}
