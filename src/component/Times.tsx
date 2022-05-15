import {useState, useEffect} from 'react'
import {DateSetterContainer} from '../lib/Styled'
import ArrowLeftBlack from '../resource/ArrowLeftBlack.svg'
import ArrowRightBlack from '../resource/ArrowRightBlack.svg'

interface DateSetterProps extends React.HTMLAttributes<HTMLDivElement> {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}
const DateSetter = (props: DateSetterProps) => {
    // current Date object
    const current_year = props.date.getFullYear()
    const current_month = props.date.getMonth() + 1
    const current_date = props.date.getDate()
    // 현재 표시될 날짜 : YYYY. MM. DD
    const today = `${current_year}. ${String(current_month).padStart(2, '0')}. ${String(
        current_date,
    ).padStart(2, '0')}`;
    // input date value : YYYY-MM-DD
    const [inputDate, setInputDate] = useState<string>('')
    const inputDateSplited = inputDate.split('-')
    // 저번달/이번달의 마지막 일자
    const prevDateObj = new Date(current_year, current_month - 1, 0)
    const currentDateObj = new Date(current_year, current_month, 0)
    const prevLastDate = prevDateObj.getDate()
    const currentLastDate = currentDateObj.getDate()
    // 좌우 버튼을 통해 이전날/다음날 이동
    const toPrevDate = () => {
        props.setDate(prev => {
            if(current_date === 1){
                return new Date(
                    current_month === 1 ? current_year - 1 : current_year,
                    current_month === 1 ? 11 : current_month - 2,
                    prevLastDate
                )
            }else{
                return new Date(current_year, current_month -1, current_date -1)
            }
        })
    }
    const toNextDate = () => {
        props.setDate(prev => {
            if (current_date === currentLastDate) {
                return new Date(
                    current_month === 12 ? current_year + 1 : current_year,
                    current_month === 12 ? 0 : current_month,
                    1,
                );
            } else {
                return new Date(current_year, current_month - 1, current_date + 1);
            }
        });
    }
    // input date value의 값에 따라 new Date 값이 바뀜
    useEffect(() => {
        if (inputDateSplited.length === 3) {
            props.setDate(
                prev =>
                    new Date(
                        Number(inputDateSplited[0]),
                        Number(inputDateSplited[1]) - 1,
                        Number(inputDateSplited[2]),
                    ),
            );
        }
    }, [inputDate]);
    // new Date 값에 따라 input date value의 값이 바뀜
    useEffect(() => {
        setInputDate(prev => today.replace(/\s/gi, '').replace(/\./gi, '-'));
    }, [today]);
    return(
        <DateSetterContainer style={props.style}>
            <section onClick={toPrevDate}>
                <img src={ArrowLeftBlack} />
            </section>
            <main>
                <p>{today}</p>
                <input type="date" value={inputDate} onChange={e => {setInputDate(e.target.value)}} />
            </main>
            <section onClick={toNextDate}>
                <img src={ArrowRightBlack} />
            </section>
        </DateSetterContainer>
    )
}

const Calendar = () => {
    return(
        <div>캘린더</div>
    )
}

export default {
    DateSetter,
    Calendar
}