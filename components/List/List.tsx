import { StyledList, StyledListElement, StyledListProps } from './List.styles';

type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> &
  StyledListProps & {
    children: React.ReactNode[];
  };

const defaultProps: Partial<ListProps> = {
  gap: 'base',
};

export default function List(props: ListProps): React.ReactElement {
  const { children, ref, ...rest } = { ...defaultProps, ...props };

  return (
    <StyledList {...rest}>
      {children.map((el) => {
        return <StyledListElement key={el?.toString()}>{el}</StyledListElement>;
      })}
    </StyledList>
  );
}
