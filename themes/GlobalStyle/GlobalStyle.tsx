import { createGlobalStyle } from 'styled-components';

import { getColor } from 'themes/mixins/getColor';
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
    ${getColor({ $color: 'text', $bgColor: 'bg' })}
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    ${getColor({ $bgColor: 'bgAccent' })}
  }

  ::-webkit-scrollbar-thumb {
    ${getColor({ $bgColor: 'main' })}

    border-radius: 3.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    ${getColor({ $bgColor: 'main2' })}
  }
`;

export default GlobalStyle;
