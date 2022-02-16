import styled from 'styled-components';

import { getFontScale } from 'themes/mixins/getFontScale';

const StyledText = styled.div`
  ${getFontScale({ scale: 'base' })}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }

  h1 {
    &:not(:first-child) {
      margin-top: ${({ theme }) => theme.spacing.lg};
    }

    ${getFontScale({ scale: 'xl3' })}
  }

  h2 {
    &:not(:first-child) {
      margin-top: ${({ theme }) => theme.spacing.lg};
    }

    ${getFontScale({ scale: 'xl2' })}
  }

  h3 {
    ${getFontScale({ scale: 'xl' })}
  }
`;

export { StyledText };
