import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;

export default GlobalStyle;
