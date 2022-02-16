import ExerciseEditor from 'components/ExerciseEditor';
import BaseTabs, { TabsProps as BaseTabsProps } from 'components/Tabs';

type TabsProps = {
  id: string;
  code?: string;
  tests?: string;
  hints?: string;
  onSuccess: () => void;
};

export default function Tabs(props: TabsProps): React.ReactElement {
  const { id, hints, onSuccess } = props;

  const tabItems: BaseTabsProps['items'] = {};

  if (id) {
    tabItems.code = {
      content: (
        <div>
          <div>
            <ExerciseEditor id={id} onSuccess={onSuccess} />
          </div>
        </div>
      ),
    };
  }

  if (hints) {
    tabItems.hints = {
      content: <div>{hints}</div>,
    };
  }

  return <BaseTabs defaultActive="code" items={tabItems} />;
}
