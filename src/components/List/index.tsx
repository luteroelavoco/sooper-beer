import './styles.less'
import React from 'react'
import { Result, Row} from 'antd'
import { Card } from '../Card'
import { useBeers } from '../../context/beers'
import { beer } from '../../types/beer'

export const List: React.FC = () => {
  const { beers } = useBeers()
  if (beers.length > 0)
    return (
      <Row gutter={[16, 16]} >
        {beers.map((beer : beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </Row>
    )
  return (
    <Row className="not-found">
      <Result
        status="500"
        title={<span> Beer not found</span>}
        subTitle="Sorry, we can not found this beer name."
      />
    </Row>
  )
}
