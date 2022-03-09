import React  from 'react'
import '../styles/pages/Home.less'
import Head from 'next/head'
import { Typography } from 'antd'
import { Form } from "../components/Form"

const { Title } = Typography

function New() {

  return (
    <div className="container-page-beers">
      <Head>
        <title>Sooper Beer</title>
      </Head>
      <Title>Entrie news beers</Title>
      <Form />
    </div>
  )
}


export default New
