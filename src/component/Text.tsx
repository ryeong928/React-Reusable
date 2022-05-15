import {RowsEllipsisContainer} from '../lib/Styled'

interface RowsEllipsisProps extends React.HTMLAttributes<HTMLDivElement>{
    lines: number
}
const RowsEllipsis = (props: RowsEllipsisProps) => {
    return(
        <RowsEllipsisContainer {...props}>{props.children}</RowsEllipsisContainer>
    )
}
export default {
    RowsEllipsis
}