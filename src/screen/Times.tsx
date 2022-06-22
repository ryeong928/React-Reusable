import Times from "../component/Times"
import {useState} from 'react'
import useDate, {useDateProps} from "../lib/Hook/useDate";
import {Row} from '../lib/Styled'

export default () => {
    // useDate
    const dateProps1:useDateProps = {
        date: true,
        dateChara: "-",
        time: true,
        timeChara: ":"
    }
        // Date.Setter 및 YYYY-MM-DD 문자열로 변환
        const [date1, setDate1] = useState<Date>(new Date());
        const date1_year = date1.getFullYear();
        const date1_month = date1.getMonth() + 1;
        const date1_date = date1.getDate();
        const cleanDate = `${date1_year}-${String(date1_month).padStart(2, '0')}-${String(date1_date,).padStart(2, '0')}`
        // timesetter
        const [time1, setTime1] = useState<string>('')
          // dateinput
  const [first_date, set_first_date] = useState<string>(cleanDate);
  const [second_date, set_second_date] = useState<string>(cleanDate);
  const first_splited = first_date.split("-");
  const second_splited = second_date.split("-");
  const first_calculated =
    Number(first_splited[0]) * 365 +
    Number(first_splited[1]) * 30 +
    Number(first_splited[2]);
  const second_calculated =
    Number(second_splited[0]) * 365 +
    Number(second_splited[1]) * 30 +
    Number(second_splited[2]);
    return(
        <main>
            <section>
                <div>{useDate(dateProps1)}</div>
            </section>
            <section>
                <Times.DateSetter date={date1} setDate={setDate1}/>
                <div>{cleanDate}</div>
            </section>
            <section>
                <Times.TimeSetter value={time1} setValue={setTime1} placeholder="시간을 선택해주세요"/>
            </section>
            <section>
        <p>두 날짜 사이 계산</p>
        <Row>
          <Times.DateInput date={first_date} setDate={set_first_date} />
          <Times.DateInput date={second_date} setDate={set_second_date} />
          <div>{first_calculated - second_calculated}</div>
        </Row>
      </section>
        </main>
    )
}