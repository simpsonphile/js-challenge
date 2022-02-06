import styled from 'styled-components';

import getFontScale from 'themes/mixins/getFontScale';

const StyledEditor = styled.div`
  max-height: 100vh;

  overflow: auto;

  ${({ theme }) => getFontScale({ theme, scale: 'lg' })};
`;

export { StyledEditor };
