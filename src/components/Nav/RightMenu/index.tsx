import './styles.less'
import React from 'react'
import { Input, } from 'antd'
import {  FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons'
import { useSearch } from "../../../context/search"
import { debounce} from "../../../utils/debounce"
export function RightMenu() {
 
  const { query , setQuery} = useSearch()
  
  return (
    <div className="right-menu">
      <Input
        className="input"
        value={query}
        placeholder="search beer"
        prefix={<SearchOutlined />}
        onChange={(e)=> debounce(setQuery(e.target.value),100)}
      />
      <div className="right-menu-social">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  )
}

