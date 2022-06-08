import { useState, useEffect } from "react"

// 모달창 외부 스크롤 방지
const PreventOutsideScroll = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    useEffect(()=>{
        if(isOpened) document.body.style.overflow = "hidden"
        else document.body.style.overflow = 'unset'
    }, [isOpened])
}
export default {
    PreventOutsideScroll
}