import classNames from 'classnames';
import Header from 'components/Header';
import LayoutContext from 'context/layoutContext';
import { useContext } from 'react';

import styles from './index.module.scss';

type DefaultLayoutProps = {
  children: React.ReactChild;
  sidebar?: React.ReactChild;
};

export default function DefaultLayout(
  props: DefaultLayoutProps
): React.ReactElement {
  const { children, sidebar } = props;

  const layoutContext = useContext(LayoutContext);
  const { isNavShown } = layoutContext;

  return (
    <div
      className={classNames(styles['layout'], {
        [styles['layout--nav-shown']]: isNavShown,
      })}
    >
      <div className={styles['layout__header']}>
        <Header />
      </div>

      {isNavShown && <div className={styles['layout__sidebar']}>{sidebar}</div>}

      <div className={styles['layout__content']}>{children}</div>

      <div id="footer" />
    </div>
  );
}
