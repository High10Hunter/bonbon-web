import { Form, FormInstance } from 'antd'

const useFieldValue = (fieldName: string, form: FormInstance) => {
  return Form.useWatch(fieldName, form)
}

export default useFieldValue
