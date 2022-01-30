import Header from 'components/Header';

import styles from './index.module.scss';

type DefaultLayoutProps = {
  children: React.ReactChild;
  sidebar?: React.ReactChild;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children, sidebar } = props;

  return (
    <div className={styles['layout']}>
      <div className={styles['layout__header']}>
        <Header />
      </div>

      <div className={styles['layout__sidebar']}>{sidebar}</div>

      <div className={styles['layout__content']}>{children}</div>

      <div id="footer" />
    </div>
  );
}
