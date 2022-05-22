import Text from '../component/Text'
import { RowsEllipsisContainer, RowEllipsisContainer } from '../lib/Styled'


export default () => {
    return(
        <main>
                <div style={{whiteSpace: "pre-wrap", backgroundColor: "yellow", width: 200}}>{'안녕\n만나서\n반가워\n반가워반가워반가워반가워반가워반가워반가워반가워반가워'}</div>
                <RowEllipsisContainer>안녕하세요 만나서 반가워요. 치킨좋아하세요? 저도 좋아해요 바삭바삭 따끈따끈한 치킨은 언제 먹어도 환상이죠</RowEllipsisContainer>
                <RowsEllipsisContainer lines={3}>안녕하세요 만나서 반가워요. 치킨좋아하세요? 저도 좋아해요 바삭바삭 따끈따끈한 치킨은 언제 먹어도 환상이죠</RowsEllipsisContainer>
        </main>
    )
}