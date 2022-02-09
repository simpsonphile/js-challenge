import ExerciseListWithSearch, {
  ExerciseListWithSearchProps,
} from 'components/ExerciseListWithSearch';

type SidebarProps = ExerciseListWithSearchProps;

export default function Sidebar(props: SidebarProps): React.ReactElement {
  const { exercises } = props;

  return (
    <div>
      <ExerciseListWithSearch exercises={exercises} />
    </div>
  );
}
