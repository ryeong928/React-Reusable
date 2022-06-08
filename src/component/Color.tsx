import styled from "styled-components"

const BGCContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    & > div{
        width: 300px;
        height: 300px;
        line-height: 300px;
        text-align: center;
    }
    & > div:nth-of-type(1){
        background: linear-gradient(180deg, rgba(144,224,227,1) 0%, rgba(255,194,248,1) 100%)
    }
`
const BGC = () => {
    return(
        <BGCContainer>
            <div>배경색1</div>
        </BGCContainer>
    )
}
export default {
    BGC
}
