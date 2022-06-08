import { useEffect, useRef, useState } from "react";
import {
  OptionBoxContainer,
  AddItemInputContainer,
  DragScrollContainer,
} from "../lib/Styled";

interface OptionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single" | "multi";
  col: string;
  row: string;
  gap: number;
  list: string[];
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  btnOption?: string;
}
const OptionBox = (props: OptionBoxProps) => {
  const chooseOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const clicked = e.target as HTMLButtonElement;
    // 내용이 있는 버튼을 누른게 아니면 무시
    if (!clicked.value) return;
    let temp = [...props.options];
    const idx = temp.findIndex((t) => t === clicked.value);
    if (idx > -1) {
      // 클릭한 옵션이 이미 선택된 옵션일 경우, 선택된 옵션 항목에서 제거
      temp.splice(idx, 1);
    } else if (idx == -1) {
      // 클릭한 옵션을 활성화 시킬 경우 : single이면 옵션 항목 초기화
      props.type === "single" && (temp = []);
      temp.push(clicked.value);
    }
    // 옵션 변경사항 저장
    props.setOptions(temp);
  };
  return (
    <OptionBoxContainer {...props} onClick={chooseOption}>
      {props.list.map((item) => (
        <button
          key={item}
          value={item}
          className={props.options.includes(item) ? "option_box_choosed" : ""}
        >
          {item}
        </button>
      ))}
    </OptionBoxContainer>
  );
};

interface AddItemInputProps {
  type: "text" | "number";
  list: string[] | undefined;
  setList: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  placeholder: string;
  height?: number;
  readonly?: true;
}
const AddItemInput = (props: AddItemInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 메인 input에서 사용자 입력값
  const [value1, setValue1] = useState<string>("");
  const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(e.currentTarget.value);
  };
  // 항목 추가
  const doAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value1.replace(/\s/gi, "")) {
      setValue1((prev) => "");
      inputRef.current?.focus();
      return;
    }
    props.setList((prev) =>
      prev === undefined ? [value1] : [...prev.concat(value1)]
    );
    setValue1((prev) => "");
    inputRef.current?.focus();
  };
  // 항목 수정 내용
  const [temp, setTemp] = useState<string[] | undefined>();
  const [inputIdx, setInputIdx] = useState<number>(999);
  useEffect(() => {
    setTemp((prev) => (props.list === undefined ? undefined : [...props.list]));
  }, [props.list]);
  // temp의 내용을 수정
  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget as HTMLInputElement;
    const value = input.value as string;
    const parent = input.parentElement as HTMLFormElement;
    const idx = parent.dataset.idx as string;
    const index = Number(idx);
    setTemp((prev) => {
      if (prev === undefined) return undefined;
      else {
        const temp2 = [...prev];
        temp2[index] = value;
        return temp2;
      }
    });
  };
  // props.list 수정 반영 | 삭제
  const handleItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idx = e.currentTarget.dataset.idx as string;
    const index = Number(idx);
    // 삭제 로직
    if (index !== inputIdx) {
      console.log("삭제");
      props.setList((prev) => {
        if (prev === undefined) {
          return undefined;
        }
        const temp = [...prev];
        temp.splice(index, 1);
        return temp;
      });
      // 수정 로직
    } else {
      console.log("수정");
      if (temp === undefined) return;
      else if (!temp[index]) {
        alert("빈 내용입니다");
        setTemp(props.list);
        return;
      } else {
        props.setList((prev) => [...temp]);
        alert("수정 되었습니다");
        inputRef.current?.focus();
        return;
      }
    }
  };
  console.log(inputIdx);
  return (
    <AddItemInputContainer>
      <form onSubmit={doAdd}>
        <input
          ref={inputRef}
          type={props.type}
          value={value1}
          onChange={onChange1}
          placeholder={props.placeholder}
          spellCheck={false}
          style={{ height: props.height }}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {temp?.map((item, idx) => (
          <form key={`${idx}`} onSubmit={handleItem} data-idx={`${idx}`}>
            <input
              value={item}
              onChange={onChange2}
              onFocus={() => {
                !props.readonly && setInputIdx((prev) => idx);
              }}
              readOnly={props.readonly || false}
            />
            <button type={"submit"}>
              {idx === inputIdx ? "수정" : "삭제"}
            </button>
          </form>
        ))}
      </ul>
    </AddItemInputContainer>
  );
};

const DragScroll = (props: React.HTMLAttributes<HTMLDivElement>) => {
  // 클릭한 상태 확인
  const [isDown, setIsDown] = useState<boolean>(false);
  // 클릭 위치
  const [startX, setStartX] = useState<number>(0);
  // 가로 스크롤 바의 왼쪽 기준 위치
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  return (
    <DragScrollContainer
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        setIsDown((prev) => true);
        container.classList.add("active");
        setStartX((prev) => e.pageX - container.offsetLeft);
        setScrollLeft((prev) => container.scrollLeft);
      }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        // 마우스가 지나가면서 경로에 있는 요소 이벤트 일어나지 않게 preventDefault
        e.preventDefault();
        if (!isDown) return;
        const container = e.currentTarget;
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
      }}
      onMouseUp={(e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        setIsDown((prev) => false);
        container.classList.remove("active");
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        setIsDown((prev) => false);
        container.classList.remove("active");
      }}
    >
      {props.children}
    </DragScrollContainer>
  );
};
interface SortingProps{
  list: number[]
  type: "asc" | "desc"
}
const Sorting = (props: SortingProps) => {
  // 오름차순
  const ascending = () => {
    const temp = [...props.list]
    temp.sort((a, b) => a - b)
    return temp.map((item, idx) => <div key={idx}>{item}</div>)
  }
  // 내림차순
  const descending = () => {
    const temp = [...props.list]
    temp.sort((a, b) => b - a)
    return temp.map((item, idx) => <div key={idx}>{item}</div>)
  }
  return(
    <div style={{display: "flex", gap: 10}}>
    {props.type === "asc" ? ascending() : descending()}
    </div>
  )
}
export default {
  OptionBox,
  AddItemInput,
  DragScroll,
  Sorting
};
