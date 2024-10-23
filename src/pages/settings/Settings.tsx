import { Form, Space, Button, InputNumber, Input } from 'antd'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import settingsApi from 'src/apis/settings.api'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export default function Settings() {
  const [form] = Form.useForm()
  const { data, refetch } = useQuery({
    queryKey: ['personalFinance'],
    queryFn: () => settingsApi.getPersonalFinance()
  })

  useEffect(() => {
    console.log('::data::', data)

    form.setFieldsValue({
      fixed_income: data?.data?.fixed_income
    })
  }, [data, form])

  const onFinish = (values: { fixed_income: number }) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onSubmit = () => {
    form.validateFields().then(async (values) => {
      const res = await settingsApi.updateFixedIncome({ fixed_income: values.fixed_income })

      if (res.status === HttpStatusCode.Ok) {
        toast.success('Fixed income updated successfully!', {
          position: 'bottom-right',
          autoClose: 300
        })
      }

      refetch()
      form.setFieldsValue({ fixed_income: res.data.fixed_income })
    })
  }

  return (
    <Form
      {...layout}
      form={form}
      name='control-hooks'
      onFinish={onFinish}
      style={{ maxWidth: 600, marginTop: '12rem', marginInline: 'auto' }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        fixed_income: data?.data?.fixed_income
      }}
    >
      <Form.Item
        name='fixed_income'
        label='Fixed income'
        rules={[{ required: true, message: 'Please input your fixed income!' }]}
      >
        <InputNumber<number | string>
          style={{ width: '100%' }}
          prefix={data?.data?.currency || '$'}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
          min={0}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type='primary' onClick={onSubmit}>
            Update
          </Button>
          <Button htmlType='button' onClick={onReset}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
