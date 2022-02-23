import styled from 'styled-components';

import { getSpacing } from 'themes/mixins';

const StyledLayoutInner = styled.div`
  max-width: 144rem;
  margin-right: auto;
  margin-left: auto;

  ${getSpacing({ $px: ['base', 'lg'] })}
`;

export { StyledLayoutInner };
