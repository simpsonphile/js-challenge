import { StyledHeadline, StyledHeadlineProps } from './Headline.styles';

export type HeadlineProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  StyledHeadlineProps;

const defaultProps: Partial<HeadlineProps> = {
  tag: 'p',
  $scale: 'xl',
};

export default function Headline(props: HeadlineProps): React.ReactElement {
  const { tag, ref, ...rest } = { ...defaultProps, ...props };

  return <StyledHeadline as={tag} {...rest} />;
}
