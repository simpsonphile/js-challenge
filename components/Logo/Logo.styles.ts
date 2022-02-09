import styled from 'styled-components';
import getFontScale from 'themes/mixins/getFontScale';

const StyledLogo = styled.div`
  p {
    margin: 0;

    ${({ theme }) => getFontScale({ theme, scale: 'xl' })};
    font-weight: 700;

    color: ${({ theme }) => theme.color.text};
  }
`;

export { StyledLogo };
