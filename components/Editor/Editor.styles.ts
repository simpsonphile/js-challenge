import styled from 'styled-components';

import { getFontSize } from 'themes/mixins';

const StyledEditor = styled.div`
  ${getFontSize({ $fs: ['base', 'lg'] })};
`;

export { StyledEditor };
