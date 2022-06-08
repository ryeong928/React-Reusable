import styled from 'styled-components';
import {Chart, registerables} from 'chart.js';
import {Radar} from 'react-chartjs-2';
import RadarBody from '../resources/RadarBody.svg';
import {ColCenter, FontSize12KM, FontSize14K} from '../lib/Styled';
import Constants from '../lib/Constants';
import {useEffect, useState} from 'react';

Chart.register(...registerables);

interface BodyForm {
    eType: string; // 근육/체지방
    target: string; // 신체부위
    value: string; // 평가
}
interface props {
    bodyForms: BodyForm[] | [];
}
export default (props: props) => {
    useEffect(() => {
        if (props.bodyForms.length === 0) return;
        const temp = props.bodyForms.map(item => {
            if (item.value === '표준 이상') return 3;
            else if (item.value === '표준') return 2;
            else return 1;
        });

        setDataForm(temp);
    }, [props]);
    const [dataForm, setDataForm] = useState<(0 | 1 | 2 | 3)[]>([
        0, 0, 0, 0, 0,
    ]);
    // 차트 데이터
    const data = {
        labels: ['몸통', '오른팔', '오른다리', '왼다리', '왼팔'],
        datasets: [
            {
                data: dataForm,
                backgroundColor: 'rgba(255, 99, 132, 0.3)',
                borderColor: 'transparent',
            },
        ],
    };
    const options = {
        // 점 제거
        elements: {
            point: {
                radius: 0,
            },
        },
        scales: {
            r: {
                // y축 제거
                angleLines: {
                    display: false,
                },
                // y값 단위 제거
                ticks: {
                    display: false,
                    stepSize: 1,
                },
                // 그래프 최소/최대 값
                min: 0,
                max: 3,
                // 각 포인트에 해당하는 레이블 제거
                pointLabels: {
                    display: false,
                },
            },
        },
        plugins: {
            // 각 포인트에 해당하는 값 표시 제거
            datalabels: {
                color: 'transparent',
            },
            legend: {
                display: false,
            },
        },
    };
    return (
        <Container>
            <Radar data={data} options={options} />
            <img src={RadarBody} />
            {data.labels.map((item, idx) => {
                return (
                    <ColCenter key={idx} className="radar_labels">
                        <FontSize12KM>{item}</FontSize12KM>
                        <FontSize14K
                            style={{color: Constants.colors.pointColor1}}>
                            표준이상
                        </FontSize14K>
                    </ColCenter>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 330px;
    height: 310px;
    padding: 50px;
    margin-bottom: 30px;
    & img {
        width: 55px;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    & > div.radar_labels {
        position: absolute;
    }
    & > div.radar_labels:nth-of-type(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    & > div.radar_labels:nth-of-type(2) {
        top: 100px;
        right: 0;
    }
    & > div.radar_labels:nth-of-type(3) {
        bottom: 0;
        right: 70px;
    }
    & > div.radar_labels:nth-of-type(4) {
        bottom: 0;
        left: 70px;
    }
    & > div.radar_labels:nth-of-type(5) {
        top: 100px;
        left: 0;
    }
`;
