import Frame from "../component/Frame";
import { useState } from "react";

const list_workout = [
  "헬스",
  "요가",
  "필라테스",
  "크로스핏",
  "복싱",
  "주짓수",
  "수영",
  "기타",
];

export default () => {
  // OptionBox
  const [options1, setOptions1] = useState<string[] | []>([]);
  const [options2, setOptions2] = useState<string[] | []>([]);
  // AddItemInput
  const [list1, setList1] = useState<string[] | undefined>(undefined);
  return (
    <main>
      <Frame.OptionBox
        type="single"
        col="repeat(4, 1fr)"
        row="repeat(2, 1fr)"
        gap={10}
        list={list_workout}
        options={options1}
        setOptions={setOptions1}
      />
      <Frame.OptionBox
        type="multi"
        col="repeat(4, 1fr)"
        row="repeat(2, 1fr)"
        gap={10}
        list={list_workout}
        options={options2}
        setOptions={setOptions2}
      />
      <Frame.AddItemInput
        type={"text"}
        list={list1}
        setList={setList1}
        placeholder={"입력하라"}
      />
      <Frame.DragScroll>
        {Array.from({ length: 6 }).map((item, idx) => (
          <div key={idx}>{idx}</div>
        ))}
      </Frame.DragScroll>
      <Frame.Sorting type="asc" list={[0, 10, 100, 50, 90, 20, 40, 80, -10, -50, 50]}/>
      <Frame.Sorting type="desc" list={[0, 10, 100, 50, 90, 20, 40, 80, -10, -50, 50]}/>
    </main>
  );
};
