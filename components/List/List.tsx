import { StyledList, StyledListElement, StyledListProps } from './List.styles';

type Item = {
  id: string;
  el: React.ReactNode | React.ReactElement;
};

type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> &
  StyledListProps & {
    items: Item[];
  };

const defaultProps: Partial<ListProps> = {
  gap: 'base',
};

export default function List(props: ListProps): React.ReactElement {
  const { items, ref, ...rest } = { ...defaultProps, ...props };

  return (
    <StyledList {...rest}>
      {items.map((item) => {
        return <StyledListElement key={item.id}>{item.el}</StyledListElement>;
      })}
    </StyledList>
  );
}
