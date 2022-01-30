import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'ref'
> & {
  iconRight?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { iconRight, className, ...rest } = props;

  return (
    <div className={classNames(styles.input, className)} {...rest}>
      <input ref={ref} {...rest} />

      <div className={styles['input__icon']}>{iconRight}</div>
    </div>
  );
});

Input.displayName = 'input';

export default Input;
