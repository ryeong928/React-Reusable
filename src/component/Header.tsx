import { useNavigate, useLocation } from "react-router-dom";
import styled, {css} from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    img?: 'back' | 'mypage' | 'close';
    imgPosition?: 'left' | 'right';
    navigate?: () => void;
    noShadow? : true
}
export default (props: Props) => {
    const who = useLocation().pathname.split('/')[2];
    const navigate = useNavigate()
    const changePage = () => {
        if (props.img === 'mypage') {
            navigate(`/mypage/${who}`);
        } else {
            props.navigate ? props.navigate() : navigate(-1);
        }
    };
    return(
        <HeaderBase {...props}>
            <div>{props.children}</div>
            <sub onClick={changePage}>뒤로가기</sub>
        </HeaderBase>
    )
}
interface HeaderBaseProps {
    noShadow?: true;
    imgPosition?: 'left' | 'right';
}
const HeaderBase = styled.header<HeaderBaseProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 80px;
    box-shadow: ${props => !props.noShadow && '0 3px 16px rgba(0, 0, 0, 0.1);'};
    background-color: skyblue;
    & sub {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 44px;
        height: 44px;
        background-color: yellow;
        ${props =>
            props.imgPosition === 'left'
                ? css`
                      left: 30px;
                  `
                : css`
                      right: 30px;
                  `}
        top: 50%;
        transform: translateY(-50%);
    }
`