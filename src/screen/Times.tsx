import Times from "../component/Times"
import {useState} from 'react'

export default () => {
        // Date.Setter 및 YYYY-MM-DD 문자열로 변환
        const [date1, setDate1] = useState<Date>(new Date());
        const date1_year = date1.getFullYear();
        const date1_month = date1.getMonth() + 1;
        const date1_date = date1.getDate();
        const cleanDate = `${date1_year}-${String(date1_month).padStart(2, '0')}-${String(
            date1_date,).padStart(2, '0')}`
    return(
        <main>
                            <Times.DateSetter
                        date={date1}
                        setDate={setDate1}
                />
                <div>{cleanDate}</div>
        </main>
    )
}