import Text from '../component/Text'
import { RowsEllipsisContainer, RowEllipsisContainer } from '../lib/Styled'


export default () => {
    return(
        <main>
                <RowsEllipsisContainer lines={3}>안녕하세요 만나서 반가워요. 치킨좋아하세요? 저도 좋아해요 바삭바삭 따끈따끈한 치킨은 언제 먹어도 환상이죠</RowsEllipsisContainer>
                <RowEllipsisContainer>안녕하세요 만나서 반가워요. 치킨좋아하세요? 저도 좋아해요 바삭바삭 따끈따끈한 치킨은 언제 먹어도 환상이죠</RowEllipsisContainer>
        </main>
    )
}