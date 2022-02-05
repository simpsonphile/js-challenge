import styled from 'styled-components';

const StyledLogo = styled.div`
  p {
    margin: 0;

    ${({ theme }) => theme.getFontScale('xl')};
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
  }
`;

export { StyledLogo };
