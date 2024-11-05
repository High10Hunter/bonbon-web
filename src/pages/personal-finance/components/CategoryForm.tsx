import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Form, Input, InputNumber, Row, Select } from 'antd'
import { FormInstance } from 'antd/lib'
import FormModal from 'src/components/common/FormModal'
import { CategoryIcon } from 'src/shared/constant'
import { CategoryDetail } from 'src/types/category.type'

interface Props {
  title: string
  modalRef: any
  form: FormInstance
  formData?: CategoryDetail
  handleSubmit?: () => void
  handleCancel?: () => void
}

export default function CategoryForm({ title, modalRef, form, formData, handleSubmit, handleCancel }: Props) {
  return (
    <>
      <FormModal
        ref={modalRef}
        title={title}
        okText='OK'
        cancelText='Cancel'
        form={form}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      >
        <Form.Item name='name' label='Name' initialValue={formData && formData.name} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='percentage'
              label='Percentage'
              initialValue={formData ? formData.percentage : 0}
              rules={[{ required: true }]}
            >
              <InputNumber min={0} max={100} style={{ width: '100%' }} addonAfter='%' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='icon'
              label='Icon'
              rules={[{ required: true }]}
              initialValue={formData ? formData.icon : null}
            >
              <Select
                style={{ width: '100%' }}
                options={CategoryIcon.map((cateIcon) => ({
                  value: cateIcon.name,
                  label: <FontAwesomeIcon icon={cateIcon.icon} size='lg' />
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
      </FormModal>
    </>
  )
}
