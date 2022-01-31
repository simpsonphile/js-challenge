import { useMemo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  theme?: 'primary' | 'secondary';
  iconRight?: React.ReactElement;
};

const defaultProps: Partial<ButtonProps> = {
  theme: 'primary',
};

export default function Button(props: ButtonProps): React.ReactElement {
  const { theme, iconRight, className, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classNames = useMemo(
    () =>
      classnames(
        styles.btn,
        {
          [styles['btn--t-' + theme]]: !!theme,
        },
        className
      ),
    [className, theme]
  );

  return (
    <button className={classNames} {...rest}>
      {children && <span className={styles['btn__label']}>{children}</span>}

      {iconRight && <span className={styles['btn__ico']}>{iconRight}</span>}
    </button>
  );
}
