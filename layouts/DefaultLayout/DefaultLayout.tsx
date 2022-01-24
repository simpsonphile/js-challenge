import Header from 'components/Header';

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
      <div id="footer" />
    </div>
  );
}
