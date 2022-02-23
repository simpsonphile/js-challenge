import Button from 'components/Button';

import {
  StyledTabs,
  StyledTabsNav,
  StyledTabsNavItem,
  StyledTabsItem,
} from './Tabs.styles';
import { Items } from './types';
import useTabs from './useTabs';

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
        {navItems.map(({ isActive, title, changeTab, goToLink, asLink }) => (
          <StyledTabsNavItem
            key={title}
            as={Button}
            variant={undefined}
            active={isActive}
            onClick={asLink ? goToLink : changeTab}
          >
            {title}
          </StyledTabsNavItem>
        ))}
      </StyledTabsNav>

      <div>
        {contentItems.map(({ id, isActive, content }) => (
          <StyledTabsItem key={id} isActive={isActive}>
            {content}
          </StyledTabsItem>
        ))}
      </div>
    </StyledTabs>
  );
}
