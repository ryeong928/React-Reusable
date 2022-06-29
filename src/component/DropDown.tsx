import React, { useEffect, useRef, useState } from "react"
import {DropDownBasic, DropDownMain} from '../lib/Styled'
import { ReactComponent as ArrowDown } from "../resources/ArrowDown.svg";

interface BasicProps {
  list: string[]
  placeholder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  count?: number // 클릭시 보이게 될 아이템 갯수. 없으면 전부 보임
}
const Basic = (props: BasicProps) => {
  const dropdown = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // 열림/닫힘 로직
  useEffect(()=>{
    const click = (e:any) => {
      if(dropdown.current?.contains(e.target)){
        // inside click 1번 : 자신 클릭시 안닫힘
        // if(!isOpened) return setIsOpened(prev => !prev)
        // inside click 2번 : 자신 클릭시 닫힘
        setIsOpened((prev) => !prev)
      }else{
        // outside click
        setIsOpened(false)
      }
      document.addEventListener("mousedown", click)
      return () => {
        document.removeEventListener("mousedown", click)
      }
    }
  }, [isOpened])
  // 아이템 선택 로직
  const select = (e:React.MouseEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLDivElement).textContent as string
    if(!value) return
    props.setValue(value)
  }
  return(
    <DropDownBasic ref={dropdown} placeholder={props.count ? String(props.count) : ""}>
      <header>
        <div>{props.value || props.placeholder}</div>
      </header>
      {isOpened && (
        <main onClick={select}>
          {props.list.map((item) => <div key={item}>{item}</div>)}
        </main>
      )}
    </DropDownBasic>
  )
}
interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
  list: string[];
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}
const Main = (props: DropDownProps) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  useEffect(() => {
    const click = (e: any) => {
      if (dropdown.current?.contains(e.target)) {
        // inside click 1번 : 자신 클릭시 안닫힘
        // if (!isOpened) return setIsOpened((prev) => !prev);
        // inside click 2번 : 자신 클릭시 닫힘
        setIsOpened((prev) => !prev);
      } else {
        // outside click
        setIsOpened(false);
      }
    };
    document.addEventListener("mousedown", click);
    return () => {
      document.removeEventListener("mousedown", click);
    };
  }, [isOpened]);
  return (
    <DropDownMain ref={dropdown}>
      <header>
        <div style={{fontSize: 15}}>신속정확 그린퀵</div>
        <ArrowDown />
      </header>
      {isOpened && (
        <main>
          {props.list.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </main>
      )}
    </DropDownMain>
  );
};
export default {
  Basic,
  Main
}