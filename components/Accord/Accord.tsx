import Box from 'components/Box';
import Headline from 'components/Headline';
import { FaChevronDown } from 'react-icons/fa';
import {
  StyledAccordHead,
  StyledAccordIcon,
  StyledAccordContent,
} from './Accord.style';

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
      <StyledAccordHead as={Box} bgColor="main" p="xs base" onClick={toggle}>
        <Headline scale="lg">{title}</Headline>

        <StyledAccordIcon isActive={isActive}>
          <FaChevronDown />
        </StyledAccordIcon>
      </StyledAccordHead>

      <StyledAccordContent isActive={isActive}>{content}</StyledAccordContent>
    </div>
  );
}
