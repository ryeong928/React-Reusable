import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import Constants from '../lib/Constants';
import {FontSize16KM, RowCenter} from '../lib/Styled';
import {ReactComponent as TargetMark} from '../resource/TargetMark.svg';

export const convertDate = (
    date: string | Date | undefined,
    method: string | undefined,
) => {
    let weekName = ['일', '월', '화', '수', '목', '금', '토'];
    if (typeof date === 'string') {
        let spli = date.split(' ');
        date = new Date(spli[0]);
    }

    if (date === undefined) {
        return '';
    }

    //강제로 타임존 조정
    //Todo : 이후 타임존 맞춰서 설정가능하도록 조치
    // if (Platform.OS === 'android') {
    //   date.setHours(date.getHours() + 9);
    // }

    let yyyy = date.getFullYear().toString();
    let yy = date.getFullYear().toString().substr(2,2);
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    let mmChars = m.split('');
    let ddChars = d.split('');

    let mm = mmChars[1] ? m : '0' + mmChars[0];
    let dd = ddChars[1] ? d : '0' + ddChars[0];
    let h = date.getHours();
    let i = date.getMinutes();
    let s = date.getSeconds();
    let hhChars = h.toString().split('');
    let iiChars = i.toString().split('');
    let ssChars = s.toString().split('');
    let hh = hhChars[1] ? h : '0' + hhChars[0];
    let ii = iiChars[1] ? i : '0' + iiChars[0];
    let ss = ssChars[1] ? s : '0' + ssChars[0];
    let text = '오전';

    if (h > 12) {
        h -= 12;
        text = '오후';
    }
    return method
        ?.replace('yyyy', yyyy)
        .replace('mm', mm)
        .replace('dd', dd)
        .replace('yy', yy)
        .replace('m', m)
        .replace('d', d)
        .replace('w', weekName[date.getDay()])
        .replace('half', text)
        .replace('hh', hh + '')
        .replace('ii', ii + '')
        .replace('ss', ss + '')
        .replace('h', h + '')
        .replace('i', i + '')
        .replace('s', s + '');
};
interface TarketIconProps {
    color: string;
}
export const TargetIcon = (props: TarketIconProps) => {
    return (
        <div
            className={'line_target'}
            style={{position: 'relative', width: 30, height: 43}}>
            <StyledTargetMark color={props.color} />
            <div
                style={{
                    fontSize: 12,
                    color: 'white',
                    position: 'absolute',
                    top: 5,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 30,
                    textAlign: 'center',
                }}>
                목표
            </div>
        </div>
    );
};
const StyledTargetMark = styled(TargetMark)<TarketIconProps>`
    fill: ${props => props.color};
`;
export interface LineProps {
    labels: number[];
    dates: string[];
}
const LineChart = (props: LineProps) => {
    const series2 = props.labels.map(item => item);
    const options = {
        chart: {
            type: 'line',
            height: 230,
        },
        // top title 삭제
        title: {
            text: '',
        },
        // highchart 워터마크 삭제
        credits: {
            enabled: false,
        },
        xAxis: {
            categories: props.dates.map(item => convertDate(item, 'mm<br/>dd')),
            //categories: [
            //    convertDate('2022-05-20', 'yy<br/>mm'),
            //    '22.<br/>05',
            //    '22.<br/>06',
            //    '22.<br/>07',
            //    '22.<br/>08',
            //],
        },
        // 최소값, left legend 삭제
        yAxis: {
            min: 52,
            title: {text: ''},
            tickAmount: 5,
            // labels: {
            //     enabled: true,
            //     formatter: function():string{
            //         return (this.value + 'kg')
            //     }
            // }
        },
        // bottom legend 삭제
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.y}</b>',
                    color: 'black',
                },
            },
        },
        series: [
            {
                name: 'data',
                data: series2,
                color: Constants.colors.pointColor1,
            },
        ],
    };
    return (
        <Container>
            <RowCenter
                style={{justifyContent: 'space-between', marginBottom: 30}}>
                <FontSize16KM>체중(kg)</FontSize16KM>
            </RowCenter>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <sub>
                <div>
                    <TargetIcon color={Constants.colors.pointColor1} />
                </div>
            </sub>
        </Container>
    );
};
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    & > sub {
        position: absolute;
        width: calc(100% - 89px);
        border-bottom: 1px solid ${Constants.colors.pointColor1};
        bottom: 87px;
        right: 30px;
        display: flex;
        justify-content: flex-end;
        & > div {
            position: relative;
            bottom: 0;
            right: -15px;
        }
    }
`;

export default {
    LineChart,
};
