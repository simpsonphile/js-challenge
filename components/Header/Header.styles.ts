import styled from 'styled-components';

import { getSpacing } from 'themes/mixins';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: var(--header-height);
  ${getSpacing({ $px: ['base', 'lg'] })}

  background-color: ${({ theme }) => theme.color.bgAccent};
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

export { StyledHeader };
