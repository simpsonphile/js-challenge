import Box from 'components/Box';
import Headline from 'components/Headline';

import {
  StyledAccordHead,
  StyledAccordIcon,
  StyledAccordContent,
} from './Accord.styles';

export type AccordProps = {
  title: string;
  content: string;
  isActive?: boolean;
  toggle?: () => void;
};

export default function Accord(props: AccordProps): React.ReactElement {
  const { title, content, isActive, toggle } = props;

  return (
    <div data-testid="accord" aria-expanded={isActive}>
      <Box
        data-testid="accord-head"
        as={StyledAccordHead}
        $bgColor="main"
        $color="textOnBg"
        $py="xs"
        $px="base"
        $hasShadow
        onClick={toggle}
      >
        <Headline $fs="lg">{title}</Headline>

        <StyledAccordIcon data-icon={isActive ? '-' : '+'} />
      </Box>

      <StyledAccordContent isActive={isActive}>{content}</StyledAccordContent>
    </div>
  );
}
