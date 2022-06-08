import {DropDownContainer} from '../lib/Styled'
import React, { useState, useEffect, useRef } from 'react';
import ArrowUpBlack from '../resource/ArrowUpBlack.svg'
import ArrowDownBlack from '../resource/ArrowDownBlack.svg'

interface DropDown1Props {
    placeholder: string
    list: string[]
    item: string
    setItem: React.Dispatch<React.SetStateAction<string>>
    height?: number
}
const DropDown1 = (props: DropDown1Props) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    // 외부 클릭시 닫히는 로직
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handler = (e: any) => {
            if(!isOpened) return
            const node = targetRef.current
            if(node && node.contains(e.target)) return
            setIsOpened(false)
        };
        if (isOpened) {
            document.addEventListener('click', handler);
        } else {
            document.removeEventListener('click', handler);
        }
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [isOpened]);
    return(
    <DropDownContainer isOpened={isOpened} height={props.height} ref={targetRef} onClick={()=>{setIsOpened(prev => !prev)}}>
        <header >
            <div>
                {props.item || props.placeholder}
            </div>
            <sub>
                <img src={isOpened ? ArrowUpBlack : ArrowDownBlack} />
            </sub>
        </header>
        {isOpened && (
            <main>
                {props.list.map((item, idx) => (
                    <div key={idx} onClick={()=>{props.setItem(item)}}>{item}</div>
                ))}
            </main>
        )}
    </DropDownContainer>
    )
}

export default {
    DropDown1
}

