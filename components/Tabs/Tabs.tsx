import Button from 'components/Button';

import { Items } from './types';
import useTabs from './useTabs';
import {
  StyledTabs,
  StyledTabsNav,
  StyledTabsNavItem,
  StyledTabsItem,
} from './Tabs.style';

export type TabsProps = {
  items: Items;
  defaultActive?: string;
};

export default function Tabs(props: TabsProps): React.ReactElement {
  const { items, defaultActive } = props;

  const { navItems, contentItems } = useTabs(items, defaultActive);

  return (
    <StyledTabs>
      <StyledTabsNav>
        {navItems.map(({ active, title, changeTab, goToLink, asLink }) => (
          <StyledTabsNavItem
            as={Button}
            genre="plain"
            active={active}
            key={title}
            onClick={asLink ? goToLink : changeTab}
          >
            {title}
          </StyledTabsNavItem>
        ))}
      </StyledTabsNav>

      <div>
        {contentItems.map(({ id, active, content }) => (
          <StyledTabsItem key={id} active={active}>
            {content}
          </StyledTabsItem>
        ))}
      </div>
    </StyledTabs>
  );
}
