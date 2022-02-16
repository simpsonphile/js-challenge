import styled from 'styled-components';

import { getFontScale } from 'themes/mixins/getFontScale';

const StyledEditor = styled.div`
  max-height: 100vh;

  ${getFontScale({ scale: 'lg' })};

  .cm-line {
    word-break: break-all;
    white-space: normal;
  }
`;

export { StyledEditor };
