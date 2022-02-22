import styled from 'styled-components';

const StyledKbd = styled.kbd`
  display: flex;
  align-items: center;

  padding: 0 0.4rem;
  height: 1.6rem;

  font-size: 1.2rem;
  font-family: monospace, sans-serif;
  line-height: 1;

  color: black;
  background: transparent;
  background-color: #e6e6e6;
  background-color: rgba(210, 210, 210, 0.9);
  border-color: #e6e6e6 #bebebe #bebebe #e6e6e6;
  border-style: solid;
  border-width: 1px 3px 4px;
  border-radius: 0.4rem;
`;

export { StyledKbd };
