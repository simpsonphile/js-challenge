import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import styles from './index.module.scss';

type LinkProps = {
  href: string;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default function Link(props: LinkProps): React.ReactElement {
  const { href, ...rest } = props;

  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={classNames(styles['link'], {
          [styles['link--active']]: isActive,
        })}
        {...rest}
      />
    </NextLink>
  );
}
