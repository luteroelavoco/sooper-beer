import './styles.less'
import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Nav'
import { SearchProvider } from '../../context/search'
import { BeersProvider } from '../../context/beers'
import { Layout as LayoutComponent } from 'antd'

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutComponent className="layout noselect">
      <BeersProvider>
        <SearchProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </BeersProvider>
    </LayoutComponent>
  )
}
