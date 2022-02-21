import styled from 'styled-components';

type StyledToggleProps = {
  $isActive?: boolean;
};

const StyledToggleHandle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};

  transform: translateX(0);

  transition: transform 0.2s;

  &:after {
    content: '0';

    color: gray;
  }
`;

const StyledToggle = styled.label<StyledToggleProps>`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  width: 4.8rem;
  height: 2.8rem;

  border-radius: 2rem;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.main : theme.color.gray};

  input:checked + ${StyledToggleHandle} {
    transform: translateX(2.4rem);

    &:after {
      content: '1';
    }
  }
`;

export { StyledToggleHandle, StyledToggle };
