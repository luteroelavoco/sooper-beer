import React, { useState } from 'react'
import './styles.less'
import Link from 'next/link'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'
import { Drawer, Button } from 'antd'
import { FaBars } from 'react-icons/fa'

export function Navbar() {
  
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false);
  }
  return (
    <nav className="menuBar">
      <div className="logo">
        <Link href="/">
          <a>SooperBeers</a>
        </Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu mode={"horizontal"}  />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <FaBars />
        </Button>
        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode={"vertical"} />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  )
}

