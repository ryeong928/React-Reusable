import {useState, useEffect} from 'react'
import Menu from '../component/Menu'

const fake_list1 = [
    "햄버거",
    "빵",
    "치킨",
    "피자",
    "도넛",
    "국밥",
    "비빔밥",
    "삼겹살",
]

export default () => {
    const [item1, setItem1] = useState<string>("")
    return(
        <div style={{display: "flex", flexDirection: "column", gap: 20, justifyContent: "center", alignItems: "center", margin: "20px 0"}}>
        <section>
                <Menu.DropDown1 list={fake_list1} item={item1} setItem={setItem1} placeholder="메뉴를 선택해주세요" height={160}/>
        </section>
        </div>
    )
}