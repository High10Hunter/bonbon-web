import { DatePicker } from 'antd'
const { RangePicker } = DatePicker
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Form } from 'antd'
import groupApi from 'src/apis/group.api'
import { useFieldValue } from 'src/shared/hook'
import type { TotalMemberSpending } from 'src/types/group.type'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js'
import { convertCurrencyToSymbol } from 'src/utils/tools'

interface Props {
  groupId?: string
}

ChartJS.register(CategoryScale, LinearScale, BarElement)

export default function TotalMemberSpending({ groupId }: Props) {
  const [form] = Form.useForm()
  const [totalMemberSpending, setTotalMemberSpending] = useState<TotalMemberSpending[]>([])

  const range = useFieldValue('range', form)
  const startDate = range?.[0].format('YYYY-MM-DD')
  const endDate = range?.[1].format('YYYY-MM-DD')

  const data = {
    labels: totalMemberSpending.map((member) => member.full_name),
    datasets: [
      {
        label: 'Amount',
        data: totalMemberSpending.map((member) => member.price),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.5
      }
    ]
  }

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      customLabels: {
        enabled: true,
        avatars: totalMemberSpending.map((member) => member.avatar)
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: `Amount (${convertCurrencyToSymbol(totalMemberSpending[0]?.currency)})`
        }
      }
    }
  }

  useEffect(() => {
    const getTotalSpendingOfMember = async () => {
      const res = await groupApi.getMembersTotalSpending(
        Number(groupId),
        startDate || dayjs().startOf('month').format('YYYY-MM-DD'),
        endDate || dayjs().endOf('month').format('YYYY-MM-DD')
      )
      const data = res.data
      setTotalMemberSpending(data)
    }
    getTotalSpendingOfMember()
  }, [groupId, startDate, endDate])

  return (
    <>
      <div className='flex items-center justify-between gap-3'>
        <h3>Overview</h3>
        <Form layout='inline' form={form}>
          <Form.Item name='range' initialValue={[dayjs().startOf('month'), dayjs().endOf('month')]}>
            <RangePicker className='w-64' />
          </Form.Item>
        </Form>
      </div>
      <div className='h-full'>
        <Bar data={data} options={options} />
      </div>
    </>
  )
}
