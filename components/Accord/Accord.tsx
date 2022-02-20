import { FaChevronDown } from 'react-icons/fa';

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
    <div>
      <Box
        as={StyledAccordHead}
        $bgColor="main"
        $pt="xs"
        $pb="xs"
        $pr="base"
        $pl="base"
        onClick={toggle}
      >
        <Headline $scale="lg">{title}</Headline>

        <StyledAccordIcon isActive={isActive}>
          <FaChevronDown />
        </StyledAccordIcon>
      </Box>

      <StyledAccordContent isActive={isActive}>{content}</StyledAccordContent>
    </div>
  );
}
