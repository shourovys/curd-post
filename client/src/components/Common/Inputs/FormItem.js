import { Form, Input } from 'antd'
import { default as React } from 'react'
const FormItem = ({ name, label, help, required, message, prefix, placeholder, onBlur, value }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      help={help}
      rules={[
        {
          required: required,
          message: message,
        },
      ]}
    >
      <Input name={name} defaultValue={value} />
    </Form.Item>
  )
}

export default FormItem