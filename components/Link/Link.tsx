import React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

import { StyledLink, StyledLinkProps } from './Link.styles';

type LinkProps = NextLinkProps & {
  href: string;
} & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
  Omit<StyledLinkProps, 'isActive'>;

export default function Link(props: LinkProps): React.ReactElement {
  const { href, as, ref, ...rest } = props;

  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <StyledLink isActive={isActive} {...rest} />
    </NextLink>
  );
}
