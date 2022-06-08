import Input from '../component/Input'
import { useState } from 'react'


export default () => {
        // Input.Basic
        const [value1, setValue1] = useState<string>("")
        const [alert1, setAlert1] = useState<"good" | "bad">("bad")
        // Input.Area
        const [value2, setValue2] = useState<string>("")
        // Input.Range
        const [value3, setValue3] = useState<string>("50")
        // Input.Search
        const [value4, setValue4] = useState<string>("")
        // Input.Validation
        const [value5, setValue5] = useState<string>("")
    return(
        <main>
            <Input.Basic type={"text"} label={'Label'} value={value1} setValue={(v)=>{setValue1(v)}} placeholder={"입력하라"} alert={alert1}/>
            <Input.Area value={value2} setValue={(v)=>{setValue2(v)}} placeholder={"입력하라"} />
            <section>
            <Input.Range value={value3} setValue={(e) => {setValue3(e.target.value)}}/>
            <div>{value3}</div>
            </section>
            <Input.Search value={value4} setValue={setValue4} placeholder="검색..." />
            <Input.Validation value={value5} setValue={setValue5} placeholder="5자 이상" />
        </main>
    )
}