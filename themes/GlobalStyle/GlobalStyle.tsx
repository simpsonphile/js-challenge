import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

import { getColor } from 'themes/mixins/getColor';
import { getFontScale } from 'themes/mixins/getFontScale';
import { mediaMinWidth } from 'themes/mixins/mediaQueries';

const GlobalStyle = createGlobalStyle`
  html {
    --header-height: 4.8rem;

    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    ${mediaMinWidth.md(css`
      --header-height: 6rem;
    `)}
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
    ${getColor({ $bgColor: 'bg2' })}
  }

  ::-webkit-scrollbar-thumb {
    ${getColor({ $bgColor: 'main' })}

    border-radius: 3.2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    ${getColor({ $bgColor: 'main2' })}
  }

  *:focus {
    outline: ${({ theme }) => theme.outline.focus};
  }
`;

export default GlobalStyle;
