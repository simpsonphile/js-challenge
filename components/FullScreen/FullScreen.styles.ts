import styled from 'styled-components';

const StyledFullScreen = styled.div`
  :fullscreen {
    padding: ${({ theme }) => theme.spacing.lg};

    background-color: ${({ theme }) => theme.color.bg};
  }
`;

export { StyledFullScreen };
