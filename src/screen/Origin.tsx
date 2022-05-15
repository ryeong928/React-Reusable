import {useState} from 'react'
import {useNavigate, useLocation, Routes, Route, useParams} from 'react-router-dom'
import styled from 'styled-components'
import Sc_Input from './Input'
import Sc_Text from './Text'
import Sc_Image from './Image'
import Sc_Frame from './Frame'
import Sc_Times from './Times'
import Sc_Calendar from './Calendar'
import Sc_Swiper from './Swiper'

const list_path: string[] = [
    "home", "input", "text", "image", "frame", "times", "calendar", "swiper" 
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
                {list_path.map(path => (
                    <div key={path} className={currentPage(path)} onClick={()=>{navigate(`/${path === "home" ? "" : path}`)}}>{path}</div>
                ))}
            </HeaderContainer>
            <Routes>
                <Route path="input" element={<Sc_Input />} />
                <Route path="text" element={<Sc_Text />} />
                <Route path="image" element={<Sc_Image />} />
                <Route path="frame" element={<Sc_Frame />} />
                <Route path="times" element={<Sc_Times />} />
                <Route path="calendar" element={<Sc_Calendar />} />
                <Route path="swiper" element={<Sc_Swiper />} />
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