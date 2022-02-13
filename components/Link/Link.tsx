import React from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { StyledLink, StyledLinkProps } from './Link.styles';

type LinkProps = {
  href: string;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  Omit<StyledLinkProps, 'isActive'>;

export default function Link(props: LinkProps): React.ReactElement {
  const { href, ref, ...rest } = props;

  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <StyledLink isActive={isActive} {...rest} />
    </NextLink>
  );
}
