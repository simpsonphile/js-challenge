import Headline, { HeadlineProps } from 'components/Headline';
import {
  StyledHeadlineHeader,
  StyledHeadlineHeaderProps,
} from './HeadlineHeader.style';

type HeadlineHeaderProps = {
  tag?: 'div' | 'header';
  headlineProps: HeadlineProps;
} & StyledHeadlineHeaderProps;

const defaultProps: Partial<HeadlineHeaderProps> = {
  tag: 'header',
  gap: 'base',
};

export default function HeadlineHeader(
  props: HeadlineHeaderProps
): React.ReactElement {
  const { tag, headlineProps, ...rest } = { ...defaultProps, ...props };

  return (
    <StyledHeadlineHeader as={tag} {...rest}>
      <Headline {...headlineProps} />
    </StyledHeadlineHeader>
  );
}
