import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js'
import { DatePicker, Form, FormInstance } from 'antd'
import dayjs from 'dayjs'
import statisticsApi from 'src/apis/statistics.api'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title)

export default function FinancialOverview() {
  const [incomeData, setIncomeData] = useState()
  const [outcomeData, setOutcomeData] = useState()
  const [form] = Form.useForm()

  const useFieldValue = (fieldName: string, form: FormInstance) => {
    return Form.useWatch(fieldName, form)
  }

  const year = useFieldValue('year', form)

  ChartJS.register(Legend)

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Example labels (months)
    datasets: [
      {
        label: 'Income',
        data: incomeData, // Income data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for income bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Outcome',
        data: outcomeData, // Outcome data
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color for outcome bars
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  }

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: 'Amount'
        }
      },
      x: {
        stacked: true
      }
    }
  }

  useEffect(() => {
    const getFinancialOverview = async () => {
      const res = await statisticsApi.financialOverview(year?.year() || dayjs().year())
      const data = res.data
      setIncomeData(data['income'])
      setOutcomeData(data['outcome'])
    }
    getFinancialOverview()
  }, [year])

  return (
    <>
      <div className='flex items-center justify-between gap-3'>
        <h2>Financial Overview</h2>
        <Form layout='inline' form={form}>
          <Form.Item name='year' initialValue={dayjs()}>
            <DatePicker picker='year' />
          </Form.Item>
        </Form>
      </div>
      <div className='h-full'>
        <Bar data={data} options={options} />
      </div>
    </>
  )
}
