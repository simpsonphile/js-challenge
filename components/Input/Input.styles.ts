import styled from 'styled-components';

const StyledInputWrap = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s};

  color: ${({ theme }) => theme.color.text};
  border: 2px solid;
  border-color: ${({ theme }) => theme.color.main};
  border-radius: ${({ theme }) => theme.radiss[2]};
  background-color: transparent;
`;

const StyledInputIconWrap = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.s};

  transform: translateY(-50%);
`;

export { StyledInputWrap, StyledInput, StyledInputIconWrap };
