import './styles.less'
import React from 'react'
import {
  Form as FormAntd,
  Input,
  message,
  Button,
  Space,
} from 'antd'
import { beer } from '../../types/beer'
import { useBeers } from "../../context/beers"

export const Form = () => {
  const [form] = FormAntd.useForm()
  const { addBeer } = useBeers()

  const onFinish = (beer: beer) => {
    message.success('Saved with success')
    addBeer(beer)    
  }

  return (
    <section className="form-section">
      <FormAntd
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormAntd.Item
          name="name"
          label={<span style={{ color: 'white ' }}> Name</span>}
          rules={[
            { required: true },
            {
              type: 'string',
              min: 6,
              message: 'title must be at leaste 6 character'
            }
          ]}
        >
          <Input placeholder="input name" />
        </FormAntd.Item>
        <FormAntd.Item
          name="image_url"
          label={<span style={{ color: 'white ' }}> URL</span>}
          rules={[
            { required: true, message: 'Please input url' },
            { type: 'url', warningOnly: true, message: 'url format invalid' }
          ]}
        >
          <Input placeholder="input url" />
        </FormAntd.Item>
        
        <FormAntd.Item
          name="tagline"
          label={<span style={{ color: 'white ' }}> Tagline</span>}
          rules={[
            { required: true },
            {
              type: 'string',
              min: 6,
              message: 'title must be at leaste 6 character'
            }
          ]}
        >
          <Input placeholder="input tagline" />
        </FormAntd.Item>
        <FormAntd.Item
          name="abv"
          label={<span style={{ color: 'white ' }}> Beer abv</span>}
          rules={[{ required: true, message: 'Please Beer abv!' }]}
        >
          <Input type="number" addonAfter={'abv'} style={{ width: '100%' }} />
        </FormAntd.Item>
        <FormAntd.Item
          name="first_brewed"
          label={<span style={{ color: 'white ' }}> First brewed</span>}
          rules={[{ required: true, message: 'Please input firs tbrewed!' }]}
        >
          <Input type="date"  style={{ width: '100%' }} />
        </FormAntd.Item>
        <FormAntd.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </FormAntd.Item>
      </FormAntd>
    </section>
  )
}
