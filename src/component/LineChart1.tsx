// npm install chart.js react-chartjs-2 chartjs-plugin-datalabels
import {Chart, registerables} from 'chart.js';
import {Line} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';

Chart.register(...registerables);
Chart.register(ChartDataLabels);
// legend 없앰,

const Container = styled.div`
    width: 100%;
    background-color: white;
    height: 280px;
`;
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const LineChart = () => {
    const data = {
        labels,
        datasets: [
            {
                data: labels.map((item, idx) => 70 * (1 - 0.05 * idx)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <Container>
            <Line data={data} options={options} />
        </Container>
    );
};

export default {
    LineChart
}