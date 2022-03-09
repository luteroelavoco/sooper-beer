import React from 'react'
import './styles.less'
import Link from 'next/link'
import { Menu} from 'antd'

const initialMenu = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'New Beer',
    slug: '/new'
  },
]

export function LeftMenu({ mode }) {

  return (
    <div className="nav-left-menu">
      <Menu mode={mode}>
        {initialMenu.map(item => (
          <Menu.Item key={item.name}>
            <Link href={item.slug}>
            <a>
               {item.name}
            </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}
