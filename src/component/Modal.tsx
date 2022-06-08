import React, { useState, useEffect, useRef } from 'react';
import {ModalContainer1} from '../lib/Styled'
import CloseIcon from '../resource/CloseIcon.svg'

export interface Base1Props{
    isOpened: boolean
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}
const Base1 = (props: Base1Props) => {
    // 모달 외부 클릭시 모달창 끄기
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        console.log(target.dataset.closemodal)
        if (target.dataset.closemodal) props.setIsOpened(false)
        else return;
    };
    return(
    <ModalContainer1 onClick={clickHandler} data-closemodal="true">
        <body>
            <header>
                <div>
                    메뉴 선택
                </div>
                <img src={CloseIcon} onClick={()=>{props.setIsOpened(false)}}/>
            </header>
            <main>
                {props.children}
            </main>
        </body>
    </ModalContainer1>
    )
}

export default {
    Base1
}

