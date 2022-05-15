import styled, {css} from 'styled-components';
import Constants from './Constants';

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ColCenter = styled(Col)`
    align-items: center;
`;
export const RowCenter = styled(Row)`
    align-items: center;
`;
export const Center = styled(Row)`
    justify-content: center;
    align-items: center;
`;
export const BaseScreen = styled(Col)`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;
export const BaseMain = styled(Col)`
    padding: 0 28px;
    flex: 1;
    overflow-y: auto;
    background-color: white;
`;
export const Space = styled.div`
    flex: 1;
`;
export const Hidden = styled.div`
    display: none;
`;
export const Abs = styled.div`
    position: absolute;
`;
interface GridBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    col: string;
    row: string;
    gap: number;
}
export const GridBox = styled.div<GridBoxProps>`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.col};
    grid-template-rows: ${props => props.row};
    gap: ${props => props.gap}px;
`

/* Frame */


interface OptionBoxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    col: string;
    row: string;
    gap: number;
    btnOption?: string
}
export const OptionBoxContainer = styled.div<OptionBoxContainerProps>`
width: 100%;
display: grid;
grid-template-columns: ${props => props.col};
grid-template-rows: ${props => props.row};
gap: ${props => props.gap}px;
    & button{
        height: 40px;
        font-size: 15px;
        background-color: yellow;
        border: none;
        outline: none;
        border-radius: 12px;
    }
    & button.option_box_choosed{
        background-color: skyblue;
        font-size: 17px;
        font-weight: bold;
    }
`
export const AddItemInputContainer = styled.div`
    width: 100%;
    & > form{
        display: flex;
        border: 1px solid pink;
        border-radius: 8px;
        overflow: hidden;
        & input{
            flex: 1;
            font-size: 16px;
            width: 100%;
            height: 40px;
            padding-left: 10px;
            background-color: #fff4f6;
            border: none;
            outline: none;
            &::placeholder{
                font-size: 14px;
            }
        }
    }
    & > ul{
        margin-top: 15px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        & form{
            display: flex;
            border: 1px solid pink;
            border-radius: 8px;
            overflow: hidden;
            width: 100%;
            & input{
                flex: 1;
                height: 40px;
                font-size: 16px;
                padding: 0 10px;
                border: none;
                outline: none;
            }
        }
    }
    & button{
        width: 60px;
        outline: none;
        border: none;
        background-color: pink;
        font-size: 16px;
        font-weight: light;
        &:hover{
            font-size: 18px;
            font-weight: bold;
            transition: 0.2s;
        }
    }
`
/* Date */

export const DateSetterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50px;
background-color: blue;
& > section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
}
& main {
    position: relative;
    background-color: skyblue;
    margin: 0 10px;
    width: 150px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > input[type='date'] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: green;
        ::-webkit-calendar-picker-indicator {
            width: 100%;
            height: 100%;
            background-color: red;
        }
    }
}
`
/* Input */

export const InputContainerBase = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    & label{
        padding: 10px;
        color: blue;
    }
    & main{
        position: relative;
        & input{
            width: 100%;
            height: 48px;
            padding: 0 20px;
            border: 1px solid gray;
            border-radius: 8px;
            outline: none;
            ::placeholder{
                color: gray;
            }
        }
        & sub{
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }
    }
    & > div{
        color: red;
        padding: 10px;
    }
`
export const TextAreaBase = styled.textarea`
    width: 100%;
    height: 80px;
    resize: none;
    outline: none;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 16px 18px;
    font-size: 15px;
    color: black;
    ::placeholder {
        font-size: 14px;
        font-weight: 300;
        color: gray;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`
/* Text */
export const RowEllipsisContainer = styled.div`
overflow: hidden; 
text-overflow: ellipsis; 
white-space: nowrap;
width: 200px;
height: 50px;
color: white;
background-color: black;
`
// 여러줄 생략법은 height를 lines로 나눴을때의 값이 line-height 값이 되어야 한다
interface RowsEllipsisContainerProps{
    lines: number
}
export const RowsEllipsisContainer = styled.div<RowsEllipsisContainerProps>`
display: -webkit-box;
-webkit-line-clamp: ${props => props.lines};
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
word-wrap: break-word;
color: white;
background-color: black;
width: 100px;
height: 60px;
line-height: 20px;
`
/* font font font font font font font font font */
export const FontSize12K = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.korean};
`;
export const FontSize12KL = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;
export const FontSize12KM = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize12KB = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize12E = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.number};
`;
export const FontSize12EM = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize12EB = styled.div`
    ${Constants.fontCSS.size12};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize13K = styled.div`
    ${Constants.fontCSS.size13};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.regular};
`;
export const FontSize13E = styled.div`
    ${Constants.fontCSS.size13};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.regular};
`;
export const FontSize13KL = styled.div`
    ${Constants.fontCSS.size13};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.light};
`;
export const FontSize13KM = styled.div`
    ${Constants.fontCSS.size13};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize13KB = styled.div`
    ${Constants.fontCSS.size13};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize14K = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.korean};
`;
export const FontSize14E = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.number};
`;
export const FontSize14KL = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;

export const FontSize14EL = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.light};
`;
export const FontSize14KM = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize14EM = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize14KB = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize14EB = styled.div`
    ${Constants.fontCSS.size14};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize15K = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.korean};
`;
export const FontSize15E = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.number};
`;

export const FontSize15KL = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;
export const FontSize15KM = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize15EM = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize15KB = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize15EB = styled.div`
    ${Constants.fontCSS.size15};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize16KL = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;
export const FontSize16K = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.korean};
`;
export const FontSize16KM = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize16E = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.number};
`;
export const FontSize16EM = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize16KB = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize16EB = styled.div`
    ${Constants.fontCSS.size16};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize18K = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.korean};
`;
export const FontSize18E = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.number};
`;
export const FontSize18KL = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;
export const FontSize18KM = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize18EM = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize18KB = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize18EB = styled.div`
    ${Constants.fontCSS.size18};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize20KL = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.light};
`;
export const FontSize20K = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.korean};
`;
export const FontSize20E = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.number};
`;
export const FontSize20KM = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;

export const FontSize20EM = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize20KB = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize20EB = styled.div`
    ${Constants.fontCSS.size20};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize22K = styled.div`
    ${Constants.fontCSS.size22};
    ${Constants.fontCSS.korean};
`;
export const FontSize22KM = styled.div`
    ${Constants.fontCSS.size22};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize24K = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.korean};
`;
export const FontSize24E = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.number};
`;
export const FontSize24KM = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize24EM = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.medium};
`;
export const FontSize24KB = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.bold};
`;
export const FontSize24EB = styled.div`
    ${Constants.fontCSS.size24};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.bold};
`;
export const FontSize25EL = styled.div`
    ${Constants.fontCSS.size25};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.light};
`;
export const FontSize30KM = styled.div`
    ${Constants.fontCSS.size30};
    ${Constants.fontCSS.korean};
    ${Constants.fontCSS.medium};
`;
export const FontSize30E = styled.div`
    ${Constants.fontCSS.size30};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.regular};
`;
export const FontSize30EL = styled.div`
    ${Constants.fontCSS.size30};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.light};
`;
export const FontSize32E = styled.div`
    ${Constants.fontCSS.size32};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.regular};
`;
export const FontSize40EL = styled.div`
    ${Constants.fontCSS.size40};
    ${Constants.fontCSS.number};
    ${Constants.fontCSS.light};
`;
