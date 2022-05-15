import React from 'react'
import {InputContainerBase,
    TextAreaBase,
} from '../lib/Styled'

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

// props.readonly === false ? false : true
export default {
    Basic,
    Area,
}