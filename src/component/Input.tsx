import React, {useState, useEffect, useRef} from 'react'
import {InputContainerBase,
    TextAreaBase,
    InputRange,
    InputSearchContainer,
    InputValidationContainer,
} from '../lib/Styled'
import  { ReactComponent as SVGIconCheck }  from '../resource/IconCheck.svg'
import { ReactComponent as IconSearch } from "../resources/IconSearch.svg";
import { ReactComponent as CircleCancel } from "../resources/CircleCancel.svg";

interface InputBasicProps extends React.HTMLAttributes<HTMLDivElement>{
    type: "text" | "number" | "password"
    value: any
    setValue: (v: any) => void
    label?: string
    alert?: "good" | "bad"
    height?: number;
}
const Basic = (props: InputBasicProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value);
    };
    return(
        <InputContainerBase>
            {props.label && <label htmlFor='label_for_input'>{props.label}</label>}
            <main>
                <input 
                    id={"label_for_input"} 
                    type={props.type} 
                    value={props.value} 
                    onChange={onChange} 
                    placeholder={props.placeholder}
                    spellCheck={false}
                    style={{height: props.height}}
                />
                {props.alert && 
                    <sub>
                        {props.alert}
                    </sub>
                }
            </main>
            {props.alert === "bad" && <div>허용되지 않습니다</div>}
        </InputContainerBase>
    )
}
interface AreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
    height?: number;
    setValue: (v: any) => void;
}
const Area = (props: AreaProps) => {
    return(
        <TextAreaBase
            spellCheck={false}
            value={props.value}
            onChange={e => {props.setValue(e.target.value);}}
            placeholder={props.placeholder}
            style={{height: props.height}}
        />
    )
}
interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement>{
    setValue: (e: any) => void
}
const Range = (props: RangeProps) => {
    return(
        <InputRange 
            type="range" min="0" max="100" step="5" 
            value={props.value} onChange={props.setValue}
        />
    )
}
interface InputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type?: string;
  readOnly?: true;
  onClick?: () => void;
}
const Search = (props: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const resetValue = () => {
    props.setValue("");
    inputRef.current?.focus();
    if (props.onClick) props.onClick();
  };
  return (
    <InputSearchContainer>
      <IconSearch />
      <input
        type={"text"}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
        ref={inputRef}
        spellCheck={false}
      />
      {props.value && (
        <CircleCancel fill={"gray"} onClick={resetValue} />
      )}
    </InputSearchContainer>
  );
};
interface ValidationProps extends React.InputHTMLAttributes<HTMLInputElement>{
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}
const Validation = (props: ValidationProps) => {
    // svg 색상 변경 로직
    const [stroke, setStroke] = useState<string>("#b4b4b4")
    useEffect(()=>{
        if(props.value.length > 4) setStroke("#62cc6c")
        else if(props.value.length > 0) setStroke("#f57a76")
        else setStroke("#b4b4b4")
    }, [props.value])
    // input onChange
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    return(
        <InputValidationContainer>
            <input type="text" value={props.value} onChange={onChange} placeholder={props.placeholder} />
            <SVGIconCheck stroke={stroke}/>
        </InputValidationContainer>
    )
}
// props.readonly === false ? false : true
export default {
    Basic,
    Area,
    Range,
    Search,
    Validation
}