import { useRef } from 'react';

import Portal from 'components/Portal';

import {
  StyledTooltip,
  StyledTooltipMessage,
  StyledTooltipProps,
} from './styles';
import useTooltip from './useTooltip';

type TooltipProps = {
  children: React.ReactChild;
  message: string;
} & StyledTooltipProps;

const defaultProps: Partial<TooltipProps> = {
  position: 'bottom',
  $bgColor: 'main',
  $color: 'text',
};

export default function Tooltip(props: TooltipProps): React.ReactElement {
  const { children, message, ...rest } = { ...defaultProps, ...props };

  const triggerRef = useRef<HTMLDivElement>(null);

  const { pos, isVisible } = useTooltip(triggerRef);

  const { top, left } = pos;

  return (
    <>
      <StyledTooltip ref={triggerRef}>{children}</StyledTooltip>
      <Portal>
        <StyledTooltipMessage
          isVisible={isVisible}
          top={top}
          left={left}
          {...rest}
        >
          {message}
        </StyledTooltipMessage>
      </Portal>
    </>
  );
}
