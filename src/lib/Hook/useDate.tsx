export interface useDateProps{
    date: boolean   // 날짜를 받아올것인지
    dateChara: string   // 날짜 사이 구분 기호
    time: boolean   // 숫자를 받아올것인지
    timeChara: string   // 시간 사이 구분 기호
}
export default (props: useDateProps) => {
    const new_date = new Date()
    const year = String(new_date.getFullYear())
    const month = String(new_date.getMonth() + 1).padStart(2, '0')
    const date = String(new_date.getDate()).padStart(2, '0')
    const hours = String(new_date.getHours()).padStart(2, '0')
    const minutes = String(new_date.getMinutes()).padStart(2, '0')
    const seconds = String(new_date.getSeconds()).padStart(2, '0')
    // 날짜 편집
    const clean_date = year + props.dateChara + month + props.dateChara + date
    // 시간 편집
    const clean_time = hours + props.timeChara + minutes + props.timeChara + seconds
    // 반환
    const returnValue = () => {
        const value:[string, string] = [clean_date, clean_time]
        if(props.date){
            if(props.time) return value.join(" ")
            else return value[0]
        }else{
            if(props.time) return value[1]
            else return ""
        }
    }
    return(
        returnValue()
    )
}