import Input from '../component/Input'
import { useState } from 'react'


export default () => {
        // Input.Basic
        const [value1, setValue1] = useState<string>("")
        const [alert1, setAlert1] = useState<"good" | "bad">("bad")
        // Input.Area
        const [value2, setValue2] = useState<string>("")
    return(
        <main>
            <Input.Basic type={"text"} label={'Label'} value={value1} setValue={(v)=>{setValue1(v)}} placeholder={"입력하라"} alert={alert1}/>
            <Input.Area value={value2} setValue={(v)=>{setValue2(v)}} placeholder={"입력하라"} />
        </main>
    )
}