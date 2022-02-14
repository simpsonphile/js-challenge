import styled from 'styled-components';

const StyledFullScreen = styled.div`
  :fullscreen {
    background-color: ${({ theme }) => theme.color.bg};
  }
`;

export { StyledFullScreen };
