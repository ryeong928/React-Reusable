import Calendar from '../component/Calendar'

const list_calendar = [
    {
        pro: '박코치',
        coaching: ['2022.5.14', '2022.5.3', '2022.4.28', '2022.4.24'],
    },
    {
        pro: '김코치',
        coaching: ['2022.5.4', '2022.5.1', '2022.4.18', '2022.4.10'],
    },
    {
        pro: '강코치',
        coaching: ['2022.5.10', '2022.5.7', '2022.4.8', '2022.4.4'],
    },
    {
        pro: '최코치',
        coaching: ['2022.5.11', '2022.5.2', '2022.4.13', '2022.4.19'],
    },
    {
        pro: '전코치',
        coaching: ['2022.5.14', '2022.5.3', '2022.4.28', '2022.4.24'],
    },
];

export default () => {
    return(
        <main>
                <Calendar list={list_calendar}/>

        </main>
    )
}