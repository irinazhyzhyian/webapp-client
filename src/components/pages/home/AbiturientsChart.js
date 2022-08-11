import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Абітурієнти',
    },
  },
};

const labels = [2019, 2020, 2021, 2022];

export const data = {
  labels,
  datasets: [
    {
      label: 'Кількість абітурієнтів',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 120 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function AbiturientsChart() {
  return <Line options={options} data={data} />;
}

export default AbiturientsChart;
