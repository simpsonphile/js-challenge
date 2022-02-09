import styled, { DefaultTheme } from 'styled-components';

const padding = ({ theme }: { theme: DefaultTheme }) => theme.spacing.lg;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;
  padding: 0 ${padding};

  background-color: ${({ theme }) => theme.color.bgAccent};
`;

export { StyledHeader };
