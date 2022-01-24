import Header from 'components/Header';
import React from 'react';

type DefaultLayoutProps = {
  children: React.ReactChild;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
