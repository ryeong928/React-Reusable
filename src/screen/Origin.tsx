import {useNavigate, Routes, Route, useParams} from 'react-router-dom'
import styled from 'styled-components'
// router
import Sc_Input from './Input'
import Sc_Text from './Text'
import Sc_Image from './Image'
import Sc_Color from './Color'
import Sc_Frame from './Frame'
import Sc_Times from './Times'
import Sc_Calendar from './Calendar'
import Sc_Swiper from './Swiper'
import Sc_Menu from './Menu'
import Sc_Modal from './Modal'
import Sc_DropDown from './DropDown'
interface Router {
    path: string
    element: JSX.Element
}
const list_router:Router[] = [
    {path: "input", element: <Sc_Input />},
    {path: "text", element: <Sc_Text/>},
    {path: "image", element: <Sc_Image/>},
    {path: "color", element: <Sc_Color/>},
    {path: "frame", element: <Sc_Frame/>},
    {path: "times", element: <Sc_Times/>},
    {path: "calendar", element: <Sc_Calendar/>},
    {path: "swiper", element: <Sc_Swiper/>},
    {path: "menu", element: <Sc_Menu/>},
    {path: "modal", element: <Sc_Modal/>},
    {path: "dropdown", element: <Sc_DropDown/>},
]

export interface Params {
    ['*']: string;
}
export default () => {
    const navigate = useNavigate()
    const {["*"]: params} = useParams<keyof Params>() as Params 
    const currentPage = (path: string) => {
        const currentPath = params === "" ? "home" : params
        if(currentPath === path){
            return "header_current_page"
        }
    }
    return(
        <Container>
            <HeaderContainer>
                {list_router.map(router => (
                    <div key={router.path} className={currentPage(router.path)} onClick={()=>{navigate(`/${router.path === "home" ? "" : router.path}`)}}>{router.path}</div>
                ))}
            </HeaderContainer>
            <Routes>
                {list_router.map(router => (<Route key={router.path} path={router.path} element={router.element} />))}
            </Routes>
      </Container>
    )
}
const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row wrap;
    padding: 20px;
    gap: 10px;
    background: linear-gradient(0deg, rgba(253,193,255,1) 0%, rgba(162,239,255,1) 100%);
    & > div{
        text-align: center;
        width: 80px;
        font-size: 18px;
        line-height: 25px;
        height: 25px;
        cursor: pointer;
        letter-spacing: 0.5px;
    }
    & > div:hover,
    & > div.header_current_page{
        color: white;
        font-size: 20px;
        font-weight: 500;
        transition: 0.2s;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    & > main{
        padding: 10px;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`