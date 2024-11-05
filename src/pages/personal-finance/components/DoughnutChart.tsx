import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'

interface Props {
  income: number
  outcome: number
}

ChartJS.register(ArcElement, Tooltip)

export default function DoughnutChart({ income, outcome }: Props) {
  const data = {
    labels: ['Income', 'Outcome'],
    datasets: [
      {
        data: [income, outcome],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)']
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div className='relative flex h-36 w-6/12 items-center justify-center justify-self-center rounded-2xl bg-cover bg-center text-center'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
