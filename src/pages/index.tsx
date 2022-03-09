import React, { useEffect } from 'react'
import '../styles/pages/Home.less'
import Head from 'next/head'
import { Typography } from 'antd'
import { List } from '../components/List'
import { Pagination } from '../components/Pagination'
import { getBeers } from '../services/'
import { useBeers } from "../context/beers"

const { Title } = Typography

function Index({ beers , update }) {
  
  const { setBeers  } = useBeers()
  
  useEffect(()=>{
    if(update){
      setBeers(beers)
    }
  },[beers, update])

  return (
    <div className="container-page-beers">
      <Head>
        <title>Sooper Beer</title>
      </Head>
      <Title>Beer variety is here at Sooper Beers</Title>
      <List  />
      <Pagination />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { page = 1, beer_name, notfetch } = query
  const { beers } = await getBeers(page, beer_name)
  return {
    props: {
      beers,
      update: notfetch ? false : true
    }
  }
}
export default Index
