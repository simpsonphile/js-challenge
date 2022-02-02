import styled from 'styled-components';
import { FontScaleName } from 'themes';

export type StyledHeadlineProps = {
  size?: FontScaleName;
};

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  margin: 0;

  ${({ theme, size }) => theme.getFontScale(size)};
`;

export { StyledHeadline };
