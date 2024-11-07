import { DatePicker, Form } from 'antd'
import PieChart from './PieChart'
import { useEffect, useState } from 'react'
import statisticsApi from 'src/apis/statistics.api'
import dayjs from 'dayjs'
const { RangePicker } = DatePicker

export default function CategoryDistribution() {
  const [incomeData, setIncomeData] = useState([])
  const [outcomeData, setOutcomeData] = useState([])
  const [form] = Form.useForm()

  const startDate = form.getFieldValue('range')?.[0].format('YYYY-MM-DD')
  const endDate = form.getFieldValue('range')?.[1].format('YYYY-MM-DD')

  useEffect(() => {
    const getCategoryDistribution = async () => {
      const res = await statisticsApi.categoryDistribution(
        startDate || dayjs().startOf('month').format('YYYY-MM-DD'),
        endDate || dayjs().endOf('month').format('YYYY-MM-DD')
      )
      const data = res.data
      console.log('dis', data)
      setIncomeData(data['income'])
      setOutcomeData(data['outcome'])
    }
    getCategoryDistribution()
  }, [endDate, incomeData, outcomeData, startDate])

  return (
    <>
      <div className='flex w-full items-center justify-between gap-4'>
        <h2>Distribution</h2>
        <Form layout='inline' form={form}>
          <Form.Item
            name='range'
            initialValue={[
              dayjs().startOf('month'), // Start of the current month
              dayjs().endOf('month') // End of the current month
            ]}
          >
            <RangePicker />
          </Form.Item>
        </Form>
      </div>

      <div className='flex h-[31rem] w-full justify-center'>
        <div className='w-4/6'>
          <PieChart title='Outcome by Category' datasets={outcomeData} />
          <PieChart title='Income by Category' datasets={incomeData} />
        </div>
      </div>
    </>
  )
}
