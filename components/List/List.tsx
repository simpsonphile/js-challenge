import { StyledList, StyledListElement } from './List.styles';

type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  children: React.ReactNode[];
};

export default function List(props: ListProps): React.ReactElement {
  const { children, ref, ...rest } = props;

  return (
    <StyledList {...rest}>
      {children.map((el, index) => {
        return <StyledListElement key={index}>{el}</StyledListElement>;
      })}
    </StyledList>
  );
}
