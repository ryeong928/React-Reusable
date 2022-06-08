import {useState, useEffect, useRef} from 'react'

export default () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // target 컴포넌트 클릭시 닫히지 않고, 그 외 컴포넌트 클릭시 isOpened가 false로 변경
        const toggleHandler = (e: any) => {
            if (!isOpened) return;
            const node = targetRef.current;
            if (node && node.contains(e.target)) return;
            setIsOpened(false);
        };
        // 이벤트핸들러 등록/제거
        if(isOpened) document.addEventListener('click', toggleHandler);
        else document.removeEventListener('click', toggleHandler);
        // 컴포넌트 언마운트시 이벤트핸들러 등록 제거
        return () => {
            document.removeEventListener('click', toggleHandler);
        };
    }, [isOpened]);
    return(
        isOpened ? <div ref={targetRef}>toggle</div> : null
    )
}