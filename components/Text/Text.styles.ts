import styled from 'styled-components';
import FontScale from 'themes/mixins/getFontScale';

const StyledText = styled.div`
  ${({ theme }) => FontScale({ theme, scale: 'base' })};

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

    ${({ theme }) => FontScale({ theme, scale: 'xl3' })};
  }

  h2 {
    &:not(:first-child) {
      margin-top: ${({ theme }) => theme.spacing.lg};
    }

    ${({ theme }) => FontScale({ theme, scale: 'xl2' })};
  }

  h3 {
    ${({ theme }) => FontScale({ theme, scale: 'xl' })};
  }
`;

export { StyledText };
