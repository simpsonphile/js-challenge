import classNames from 'classnames';

import styles from './index.module.scss';

type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  children: React.ReactNode[];
};

export default function List(props: ListProps): React.ReactElement {
  const { children, className, ...rest } = props;

  return (
    <ul className={classNames(styles['list'], className)} {...rest}>
      {children.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
}
