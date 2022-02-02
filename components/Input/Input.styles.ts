import styled from 'styled-components';

const StyledInputWrap = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spaces[2]};

  border: 2px solid;
  border-color: ${({ theme }) => theme.main};
  border-radius: 0.4rem;
`;

const StyledInputIconWrap = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spaces[2]};

  transform: translateY(-50%);
`;

export { StyledInputWrap, StyledInput, StyledInputIconWrap };
