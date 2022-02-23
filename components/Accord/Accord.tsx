import Box from 'components/Box';
import Headline from 'components/Headline';
import { Icon } from 'components/Icon';

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
        $color="textOnBg"
        $py="xs"
        $px="base"
        $hasShadow
        onClick={toggle}
      >
        <Headline $fs="lg">{title}</Headline>

        <StyledAccordIcon isActive={isActive}>
          <Icon name="AiOutlineArrowDown" />
        </StyledAccordIcon>
      </Box>

      <StyledAccordContent isActive={isActive}>{content}</StyledAccordContent>
    </div>
  );
}
