import React from 'react'
import './styles.less'
import { Card as CardBeer, Col} from 'antd'
import { IoWine } from 'react-icons/io5'
import { BsCalendarDateFill } from 'react-icons/bs'
import { beer } from '../../types/beer'

const { Meta } = CardBeer

interface CardProps {
  beer: beer
}
export const Card: React.FC<CardProps> = React.memo(({ beer }) => {
  return (
    <Col className="container-card-anime" xs={12} sm={12} md={8} lg={4}>
      <CardBeer
        hoverable
        bordered={false}
        style={{ width: '100%' }}
        cover={<img alt={beer.tagline} src={beer.image_url} />}
      >
        <Meta
          title={beer.name}
          description={<span style={{ margin: '1rem' }}>{beer.tagline}</span>}
        />
        <div className="bottom">
          <label>
            <IoWine /><strong> {beer.abv}</strong>
          </label>
          <label>
            <BsCalendarDateFill /> {beer.first_brewed}
          </label>
        </div>
      </CardBeer>
    </Col>
  )
})

