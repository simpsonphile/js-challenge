import Editor from 'components/Editor';
import ExerciseEditor from 'components/ExerciseEditor';
import BaseTabs, { TabsProps as BaseTabsProps } from 'components/Tabs';

type TabsProps = {
  id: string;
  code?: string;
  tests?: string;
  hints?: string;
  solution?: string;
  isPassed?: boolean;
  onSuccess: () => void;
};

export default function Tabs(props: TabsProps): React.ReactElement {
  const { id, hints, solution, isPassed, onSuccess } = props;

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

  if (isPassed && solution) {
    tabItems.solution = {
      content: <Editor value={solution} />,
    };
  }

  return <BaseTabs defaultActive="code" items={tabItems} />;
}
