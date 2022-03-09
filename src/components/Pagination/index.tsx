import React from 'react'
import { Pagination as PaginationAntd , Row} from 'antd'
import { animateScroll as scroll } from 'react-scroll'
import { useSearch } from '../../context/search'
import { useBeers } from '../../context/beers'

export const Pagination: React.FC = () => {
  const { setPage } = useSearch()
  const { beers } = useBeers()
  const onPageChange = (page: number) => {
    scroll.scrollTo(0, { delay: 500 })
    setPage(page)
  }
  
  if (beers.length > 0)
    return (
      <Row style={{ marginTop : '2rem'}}> 
        <PaginationAntd
          defaultCurrent={1}
          pageSize={16}
          total={200}
          showSizeChanger={false}
          onChange={onPageChange}
        />
      </Row>
    )
  return <div />
}
