import { createGlobalStyle } from 'styled-components';

import getFontScale from 'themes/mixins/getFontScale';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    max-width: 100%;
    
    ${({ theme }) => getFontScale({ theme, scale: 'base' })};

    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.bgAccent};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.main};
    border-radius: 3.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.mainHover};
  }
`;

export default GlobalStyle;
