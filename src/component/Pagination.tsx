export interface PaginationData {
    // 글 전체 갯수
    count: number
    // 한 페이지 당 글 갯수
    countPerPage: number
    // 총 페이지 갯수
    pageCount : number
    // 페이지네이션에 보여줄 페이지 인덱스 갯수
    indexCount : number
    // 현재 페이지 인덱스
    currentIndex: number
    // 좌우 페이지 인덱스 이동 버튼을 통해 증감하는 pageCount 증감
    base: number
}

const Pagination = (props: PaginationData) => {
    return(
        <div>페이지내이션</div>
    )
}
export default {
    Pagination
}