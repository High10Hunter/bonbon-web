import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

export interface Props {
  title?: string
  datasets: { category: string; amount: number }[]
}

ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default function PieChart({ title, datasets }: Props) {
  const data = {
    labels: datasets.filter((item) => item.amount > 0).map((item) => item.category),
    datasets: [
      {
        data: datasets.filter((item) => item.amount > 0).map((item) => item.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFCD56',
          '#4BC0C0',
          '#C9CBCF',
          '#B565A7',
          '#2E8B57',
          '#8A2BE2',
          '#FFD700',
          '#FF4500',
          '#00CED1'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFCD56',
          '#4BC0C0',
          '#C9CBCF',
          '#B565A7',
          '#2E8B57',
          '#8A2BE2',
          '#FFD700',
          '#FF4500',
          '#00CED1'
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20
        },
        padding: {
          top: 20,
          bottom: -20
        }
      }
    }
  }

  return <Pie data={data} options={options} />
}
