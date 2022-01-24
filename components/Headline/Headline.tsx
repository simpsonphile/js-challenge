import classNames from 'classnames';

import styles from './index.module.scss';

type HeadlineProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const defaultProps: Partial<HeadlineProps> = {
  tag: 'p',
};

export default function Headline(props: HeadlineProps): React.ReactElement {
  const { tag, className, ...rest } = { ...defaultProps, ...props };

  const Tag = tag || 'p';

  return (
    <Tag className={classNames(styles['headline'], className)} {...rest} />
  );
}
