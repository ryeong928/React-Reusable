import {BtnOnOff} from '../lib/Styled'

interface OnOffProps extends React.HTMLAttributes<HTMLDivElement> {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}
const OnOff = (props: OnOffProps) => {
  return (
    <BtnOnOff
      placeholder={props.value ? "active" : ""}
      onClick={() => {
        props.setValue((prev) => !prev);
      }}
    >
      <div />
    </BtnOnOff>
  );
};
export default {
  OnOff
}