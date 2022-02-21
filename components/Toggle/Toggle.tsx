import { StyledToggle, StyledToggleHandle } from './Toggle.styles';

type ToggleProps = {
  isChecked: boolean;
  toggle: (s: boolean) => void;
};

export default function Toggle(props: ToggleProps): React.ReactElement {
  const { isChecked, toggle } = props;

  return (
    <StyledToggle $isActive={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        hidden
        onChange={(e) => toggle(e.target.checked)}
      />
      <StyledToggleHandle />
    </StyledToggle>
  );
}
