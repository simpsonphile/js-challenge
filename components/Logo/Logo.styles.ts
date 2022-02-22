import styled from 'styled-components';

import { getFontSize } from 'themes/mixins/getFontSize';

const StyledLogo = styled.div`
  p {
    margin: 0;

    ${getFontSize({ $fs: ['lg', 'xl'] })};
    line-height: 1;
    font-weight: 700;

    color: ${({ theme }) => theme.color.text};
  }
`;

export { StyledLogo };
