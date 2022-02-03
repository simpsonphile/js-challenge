import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    max-width: 100%;
    
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.color.bg.c};
    color: ${({ theme }) => theme.color.text.c};
  }
`;

export default GlobalStyle;
