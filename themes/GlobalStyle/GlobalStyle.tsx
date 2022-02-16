import { createGlobalStyle } from 'styled-components';

import { colorMixin } from 'themes/mixins/color';
import { getFontScale } from 'themes/mixins/getFontScale';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    max-width: 100%;
    
    ${getFontScale({ $scale: 'base' })};
    ${colorMixin({ color: 'text', bgColor: 'bg' })}
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    ${colorMixin({ bgColor: 'bgAccent' })}
  }

  ::-webkit-scrollbar-thumb {
    ${colorMixin({ bgColor: 'main' })}

    border-radius: 3.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    ${colorMixin({ bgColor: 'mainHover' })}
  }
`;

export default GlobalStyle;
